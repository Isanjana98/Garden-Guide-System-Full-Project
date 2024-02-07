from django.contrib.auth.models import User
from django.db import models

# Create your models here.
from django.db.models.signals import pre_save
from django.dispatch import receiver


class PlantCategory(models.Model):
    name = models.CharField(max_length=100)

    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True , related_name='category_created')
    updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True,blank=True , related_name='category_updated')
    created_time = models.DateTimeField(auto_now_add=True , null=True)
    updated_time = models.DateTimeField(auto_now=True , null=True)

    def __str__(self):
        return self.name

class Plant(models.Model):

    STATUS_CHOICES = (
        ('PENDING', 'Pending'),
        ('ACTIVE', 'Active'),
    )

    name = models.CharField(max_length=100)
    scientific_name = models.CharField(max_length=100)
    other_name = models.CharField(max_length=100) #sinhala name
    name_in_other_language = models.CharField(max_length=100) # tamil name
    kingdom = models.CharField(max_length=100) # family
    country = models.CharField(max_length=100 , null= True)
    clade = models.CharField(max_length=100 , null=True)
    description = models.TextField()
    speciality = models.TextField(null=True)
    history = models.TextField(null=True)
    category = models.ForeignKey(PlantCategory, on_delete=models.CASCADE)
    status = models.CharField(max_length=8, choices=STATUS_CHOICES, default='PENDING')
    image = models.ImageField(upload_to='plant_images/', null=True, blank=True)

    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True , related_name='plant_created')
    updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True,blank=True , related_name='plant_updated')
    created_time = models.DateTimeField(auto_now_add=True , null=True)
    updated_time = models.DateTimeField(auto_now=True , null=True)

    def __str__(self):
        return self.name

class Area(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name