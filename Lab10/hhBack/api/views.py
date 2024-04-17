from django.http import JsonResponse
from django.http import Http404
from django.shortcuts import get_object_or_404
from api.models import Company, Vacancy
from rest_framework.decorators import api_view
from rest_framework.mixins import RetrieveModelMixin, CreateModelMixin, DestroyModelMixin, UpdateModelMixin
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import VacancySeriliazer, CompanySerializer


@api_view(["GET", "POST"])
def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many = True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid(raise_exception=False):
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
             

class CompanyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = "id"

    
@api_view(["GET", "POST"])
def company_vacancies(request, id):
    if request.method == "GET":
        try:
            company = get_object_or_404(Company, id=id)
            vacancies = company.vacancies.all()
            serializer = VacancySeriliazer(vacancies, many=True)
            return Response(serializer.data)
        except Http404:
            return Response({})
    elif request.method == "POST":
        serializer = VacancySeriliazer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class VanacyListView(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySeriliazer

class VanacyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySeriliazer
    lookup_field = "id"


@api_view(["GET"])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySeriliazer(vacancies, many = True)
    return Response(serializer.data)
