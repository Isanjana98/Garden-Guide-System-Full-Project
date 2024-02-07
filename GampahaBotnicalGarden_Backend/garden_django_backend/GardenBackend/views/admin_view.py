from PIL.Image import Image
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from GardenBackend.models import Plant, PlantCategory, Area
from GardenBackend.serializers import PlantSerializer, PlantCategorySerializer, AreaSerializer
from django.contrib.auth.models import User
from django.core.files.uploadedfile import InMemoryUploadedFile
from io import BytesIO
from PIL import Image
import os


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_new_plant(request):
    current_user = request.user
    name = request.data.get('name')
    scientific_name = request.data.get('scientific_name')
    other_name = request.data.get('other_name')
    name_in_other_language = request.data.get('name_in_other_language')
    kingdom = request.data.get('kingdom')
    country = request.data.get('country')
    clade = request.data.get('clade')
    description = request.data.get('description')
    speciality = request.data.get('speciality')
    history = request.data.get('history')
    category = request.data.get('category')

    if not name:
        return Response({'message': 'Name is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not scientific_name:
        return Response({'message': 'scientific name is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not other_name:
        return Response({'message': 'Sinhala name is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not name_in_other_language:
        return Response({'message': 'Tamil is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not kingdom:
        return Response({'message': 'family is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not country:
        return Response({'message': 'Country is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not clade:
        return Response({'message': 'Clade is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not description:
        return Response({'message': 'Description is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not speciality:
        return Response({'message': 'Speciality is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not history:
        return Response({'message': 'History is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not category:
        return Response({'message': 'Category is required fields.'}, status=status.HTTP_400_BAD_REQUEST)


    plant = Plant.objects.create(
        name=name,
        scientific_name=scientific_name,
        other_name=other_name,
        name_in_other_language=name_in_other_language,
        kingdom=kingdom,
        country=country,
        clade=clade,
        description=description,
        speciality=speciality,
        history=history,
        category=get_object_or_404(PlantCategory, id=category),
        created_by=current_user

    )

    # Check if an image was included in the request
    if 'image' in request.FILES:
        uploaded_image = request.FILES['image']

        # Ensure the uploaded file is an image
        if uploaded_image.content_type.startswith('image'):
            # Resize and save the image
            img = Image.open(uploaded_image)
            img.thumbnail((300, 300))  # Resize the image to a maximum size of 300x300 pixels
            output = BytesIO()
            img.save(output, format='JPEG', quality=90)
            output.seek(0)

            # Create an InMemoryUploadedFile and set it as the image field
            image_file = InMemoryUploadedFile(
                output,
                'ImageField',
                f'{uploaded_image.name.split(".")[0]}_thumb.jpg',
                'image/jpeg',
                output.getbuffer().nbytes,
                None
            )

            # Assign the image_file to the plant's image field
            plant.image = image_file


    plant.save()

    serializer = PlantSerializer(plant)
    return JsonResponse(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_plant_by_id(request):
    plant_id = request.GET.get('plant_id')
    plant = get_object_or_404(Plant, id=plant_id)
    serializer = PlantSerializer(plant)
    return JsonResponse(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_plant_all(request):
    plants = Plant.objects.all()
    serializer = PlantSerializer(plants , many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_plant(request):
    current_user = request.user

    id = request.data.get("id")
    name = request.data.get('name')
    scientific_name = request.data.get('scientific_name')
    other_name = request.data.get('other_name')
    name_in_other_language = request.data.get('name_in_other_language')
    kingdom = request.data.get('kingdom')
    country = request.data.get('country')
    clade = request.data.get('clade')
    description = request.data.get('description')
    speciality = request.data.get('speciality')
    history = request.data.get('history')
    category = request.data.get('category')
    status = request.data.get('status')

    if not id:
        return Response({'message': 'Id is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not name:
        return Response({'message': 'Name is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not scientific_name:
        return Response({'message': 'scientific name is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not other_name:
        return Response({'message': 'Sinhala name is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not name_in_other_language:
        return Response({'message': 'Tamil is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not kingdom:
        return Response({'message': 'family is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not country:
        return Response({'message': 'Country is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not clade:
        return Response({'message': 'Clade is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not description:
        return Response({'message': 'Description is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not speciality:
        return Response({'message': 'Speciality is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not history:
        return Response({'message': 'History is required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if not category:
        return Response({'message': 'Category is required fields.'}, status=status.HTTP_400_BAD_REQUEST)


    plant = get_object_or_404(Plant , id=id)

    plant.name=name
    plant.scientific_name=scientific_name
    plant.other_name=other_name
    plant.name_in_other_language=name_in_other_language
    plant.kingdom=kingdom
    plant.country=country
    plant.clade=clade
    plant.description=description
    plant.speciality=speciality
    plant.history=history
    plant.category=get_object_or_404(PlantCategory, id=category)
    plant.status = status

    plant.updated_by = current_user


    plant.save()
    serializer = PlantSerializer(plant)
    return JsonResponse(serializer.data)

@api_view(['DELETE'])
def delete_plant(request):
    id = request.data.get("id")
    plant = get_object_or_404(Plant, id=id)
    plant.delete()
    return JsonResponse({"message": f"Plant with ID {id} has been deleted."})



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_category(request):
    current_user = request.user
    name = request.data.get("name")
    category = PlantCategory.objects.create(name=name ,created_by=current_user)
    category.save()
    serializer = PlantCategorySerializer(category, many=False)
    return JsonResponse(serializer.data, safe=False)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_category(request):
    current_user = request.user
    id = request.data.get("id")
    name = request.data.get("name")
    category = get_object_or_404(PlantCategory, id=id)
    category.name = name
    category.updated_by = current_user
    category.save()
    serializer = PlantCategorySerializer(category, many=False)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def category_by_id(request):
    id = request.GET.get('id')
    category = get_object_or_404(PlantCategory, id=id)
    serializer = PlantCategorySerializer(category, many=False)
    return JsonResponse(serializer.data, safe=False)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_category(request):
    id = request.data.get("id")
    category = get_object_or_404(PlantCategory, id=id)
    category.delete()
    return JsonResponse({"message": f"Category with ID {id} has been deleted."})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def all_category(request):
    category = PlantCategory.objects.all()
    serializer = PlantCategorySerializer(category, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_areas(request):
    areas = Area.objects.all()
    serializer = AreaSerializer(areas, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_area(request):
    id = request.data.get("id")
    name = request.data.get("name")
    description = request.data.get("description")
    area = get_object_or_404(Area, id=id)
    area.name = name
    area.description = description
    area.save()
    serializer = AreaSerializer(area, many=False)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def dashboard_view(request):

    number_of_plants = Plant.objects.count()
    number_of_categories = PlantCategory.objects.count()
    number_of_areas = Area.objects.count()
    number_of_user = User.objects.count()

    data = {
        'number_of_plants' : number_of_plants,
        'number_of_categories' : number_of_categories,
        'number_of_areas' : number_of_areas,
        'number_of_user' : number_of_user
    }

    return JsonResponse(data, safe=False)


