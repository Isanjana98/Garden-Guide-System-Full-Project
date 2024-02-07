# serializers.py
import base64

from django.contrib.auth.models import User
from rest_framework import serializers

from GardenBackend.models import PlantCategory, Plant , Area

class PlantCategorySerializer(serializers.ModelSerializer):
    created_by_username = serializers.SerializerMethodField()
    updated_by_username = serializers.SerializerMethodField()
    plant_count = serializers.SerializerMethodField()
    class Meta:
        model = PlantCategory
        fields = '__all__'

    def get_created_by_username(self, obj):
        created_by_user = obj.created_by
        return created_by_user.username if created_by_user else None

    def get_updated_by_username(self, obj):
        updated_by_user = obj.updated_by
        return updated_by_user.username if updated_by_user else None

    def get_plant_count(self, obj):
        return obj.plant_set.count()

class PlantSerializer(serializers.ModelSerializer):
    created_by_username = serializers.SerializerMethodField()
    updated_by_username = serializers.SerializerMethodField()

    class Meta:
        model = Plant
        fields = '__all__'

    def get_created_by_username(self, obj):
        created_by_user = obj.created_by
        return created_by_user.username if created_by_user else None

    def get_updated_by_username(self, obj):
        updated_by_user = obj.updated_by
        return updated_by_user.username if updated_by_user else None

    def to_representation(self, instance):
        data = super().to_representation(instance)

        # Update the image URL with the new URL
        new_image_url = f'data:image/jpeg;base64,{base64.b64encode(instance.image.read()).decode("utf-8")}'
        data['image_org'] = instance.image.url
        data['image'] = new_image_url

        return data

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name' , "is_active")