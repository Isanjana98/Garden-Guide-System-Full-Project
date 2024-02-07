from django.contrib import admin
from .models import PlantCategory, Plant , Area

# Register your models here.
admin.site.register(PlantCategory)
admin.site.register(Plant)
admin.site.register(Area)
