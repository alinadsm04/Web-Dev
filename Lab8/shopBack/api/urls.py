from django.urls import path
from . import views

urlpatterns = [
    path("products", views.getAllProducts),
    path("products/<int:id>/", views.getProductById),
    path("categories/", views.getAllCategories),
    path("categories/<int:id>/", views.getCategoryById),
    path("categories/<int:id>/products/", views.getProductsByCatgeory)
]