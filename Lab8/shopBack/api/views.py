from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category

def getAllProducts(request):
    return JsonResponse(data=[product.to_json() for product in Product.objects.all()], safe=False)

def getProductById(request, id):
    return JsonResponse(data=Product.objects.get(id = id).to_json(), safe=False)

def getAllCategories(request):
    return JsonResponse(data=[category.to_json() for category in Category.objects.all()], safe=False)


def getCategoryById(request, id):
    return JsonResponse(data=Category.objects.get(id = id).to_json(), safe=False)

def getProductsByCatgeory(request, id):
    return JsonResponse(data=[product.to_json() for product in Product.objects.filter(category_id = id)], safe=False)

