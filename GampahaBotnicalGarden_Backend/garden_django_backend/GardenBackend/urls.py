
from django.urls import path
import GardenBackend.views.auth_views as auth_views
import  GardenBackend.views.app_views as app_views
import  GardenBackend.views.admin_view as admin_view

urlpatterns = [
    # auth views
    path('login', auth_views.login , name="login"),
    path('register', auth_views.registration_view, name='register'),
    path('dashboard/get_all_users', auth_views.get_all_users, name='get_all_users'),
    path('dashboard/update_user', auth_views.update_user, name='update_user'),
    path('dashboard/delete_user', auth_views.delete_user, name='delete_user'),
    path('dashboard/check_token_validity', auth_views.check_token_validity, name='check_token_validity'),

    # app views
    path('test', app_views.my_protected_view, name='test'),
    path('get_plants', app_views.get_plants, name='get_plants'),
    path('get_plant_categories', app_views.get_plant_categories, name='get_plant_categories'),
    path('get_plant_by_id', app_views.get_plant_by_id, name='get_plant_by_id'),
    path('get_plant_by_name', app_views.get_plant_by_name, name='get_plant_by_name'),
    path('area_detail_by_id', app_views.area_detail_by_id, name='area_detail_by_id'),

    # dashboard
    path('dashboard/add_plant', admin_view.add_new_plant, name='add_plant'),
    path('dashboard/get_plant_by_id', admin_view.get_plant_by_id, name='get_plant_by_id'),
    path('dashboard/get_plant_all', admin_view.get_plant_all, name='get_plant_all'),
    path('dashboard/update_plant', admin_view.update_plant, name='update_plant'),
    path('dashboard/delete_plant', admin_view.delete_plant, name='delete_plant'),
    path('dashboard/dashboard_view', admin_view.dashboard_view, name='dashboard_view'),

    # category
    path('dashboard/add_category', admin_view.add_category, name='add_category'),
    path('dashboard/update_category', admin_view.update_category, name='update_category'),
    path('dashboard/category_by_id', admin_view.category_by_id, name='category_by_id'),
    path('dashboard/delete_category', admin_view.delete_category, name='delete_category'),
    path('dashboard/categories', admin_view.all_category, name='categories'),

    # areas
    # category
    path('dashboard/get_all_areas', admin_view.get_all_areas, name='get_all_areas'),
    path('dashboard/update_area', admin_view.update_area, name='update_area'),
    # path('dashboard/category_by_id', admin_view.category_by_id, name='category_by_id'),
    # path('dashboard/delete_category', admin_view.delete_category, name='delete_category'),
    # path('dashboard/categories', admin_view.all_category, name='categories'),

]
