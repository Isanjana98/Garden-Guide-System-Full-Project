import base64

from django.db.models import Q
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from GardenBackend.models import Plant, PlantCategory, Area
from GardenBackend.serializers import PlantCategorySerializer , PlantSerializer , AreaSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Use IsAuthenticated permission
def my_protected_view(request):
    # Your protected view code here
    # This endpoint will now require authentication (Token or JWT) to access
    return Response({'message': 'This is a protected endpoint.'})

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_plants(request):
    category_id = request.GET.get('category_id')
    host_address = request.META.get('HTTP_HOST', '')
    if category_id is not None and category_id:
        category = get_object_or_404(PlantCategory, id=category_id)
        plants = Plant.objects.filter(category=category , status='ACTIVE')
    else:
        plants = Plant.objects.filter(status='ACTIVE')
    serialized_plants = [
        {
            'plantId': plant.id,
            'name': plant.name,
            'desc': plant.description,
            'scientificName': plant.scientific_name,
            'specialty': plant.speciality,
            'other_name' : plant.other_name,
            'name_in_other_language': plant.name_in_other_language,
            'kingdom': plant.kingdom,
            'country' : plant.country,
            'history' : plant.history,
            'clade': plant.clade,
            'category': plant.category.name,
            # 'image': "data:image/jpeg;base64,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",
            # 'image:': host_address + plant.image.url,
            'image': f'data:image/jpeg;base64,{base64.b64encode(plant.image.read()).decode("utf-8")}'
            # 'image:': "https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*",
        }
        for plant in plants
    ]
    return JsonResponse(serialized_plants, safe=False)


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_plant_categories(request):
    categories = PlantCategory.objects.all()
    serializer = PlantCategorySerializer(categories, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_plant_by_id(request):
    plant_id = request.GET.get('plant_id')
    plant = get_object_or_404(Plant, id=plant_id, status='ACTIVE')
    serializer = PlantSerializer(plant)
    return JsonResponse(serializer.data)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_plant_by_name(request):
    # plant_id = request.GET.get('plant_name')
    # plant = get_object_or_404(Plant, id=plant_id)
    # serializer = PlantSerializer(plant)
    # return JsonResponse(serializer.data)
    plant_name = request.GET.get('plant_name')

    if plant_name:
        # Perform a case-insensitive partial match on the plant names
        plants = Plant.objects.filter(Q(name__icontains=plant_name))
        serializer = PlantSerializer(plants, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        # Handle the case where plant_name is not provided
        return JsonResponse({'message': 'Please provide a plant_name parameter'}, status=400)


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def area_detail_by_id(request):
    area_id = request.GET.get('area_id')
    if area_id is not None:
        area = get_object_or_404(Area, id=area_id)
        serializer = AreaSerializer(area)
        return JsonResponse(serializer.data)
    else:
        areas = Area.objects.all()
        serializer = AreaSerializer(areas, many=True)
        return JsonResponse(serializer.data, safe=False)
