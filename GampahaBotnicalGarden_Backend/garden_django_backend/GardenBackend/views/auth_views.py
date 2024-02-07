from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import render, HttpResponse, get_object_or_404
from django.contrib.auth import authenticate
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password

from GardenBackend.serializers import UserSerializer


@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        refresh = RefreshToken.for_user(user)
        access_token = refresh.access_token
        return Response({
            'username': username,
            'is_super_user' : user.is_superuser,
            'access_token': str(access_token),
            'refresh_token': str(refresh),
        })
    return Response({'message': 'Invalid credentials.'}, status=401)


@api_view(['POST'])
@permission_classes([AllowAny])
def registration_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')

    if not username or not password or not email:
        return Response({'message': 'Username, password, and email are required fields.'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({'message': 'Username already exists.'}, status=status.HTTP_409_CONFLICT)

    # try:
    #     validate_email(email)
    # except ValidationError as e:
    #     return Response({'message': 'Invalid email format.'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        validate_password(password, user=User)
    except ValidationError as e:
        return Response({'message': list(e.messages)}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, password=password, email=email)
    return Response({'message': 'User registration successful.'}, status=status.HTTP_201_CREATED)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def check_token_validity(request):
    # this api can only access with valid token
    return Response({'message': 'Token is valid.'}, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_user(request):

    current_user = request.user

    id = request.data.get("id")
    username = request.data.get("username")
    email = request.data.get("email")
    first_name = request.data.get("first_name")
    last_name = request.data.get("last_name")
    is_active = request.data.get("is_active")

    user = get_object_or_404(User, id=id)
    user.username = username
    user.email = email
    user.first_name = first_name
    user.last_name = last_name

    if(current_user.is_superuser):
        user.is_active = is_active

    user.save()
    serializer = UserSerializer(user, many=False)
    return JsonResponse(serializer.data, safe=False)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_user(request):
    id = request.data.get("id")

    user = get_object_or_404(User, id=id)

    user.delete()
    return JsonResponse({"message": f"User with ID {id} has been deleted."})