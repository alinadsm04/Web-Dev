from django.urls import path
from .views import *


urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:id>/', CompanyDetailView.as_view()),
    path('companies/<int:id>/vacancies/', company_vacancies),
    path('vacancies/',VanacyListView.as_view()),
    path('vacancies/<int:id>/', VanacyDetailView.as_view()),
    path('vacancies/top_ten/', top_ten_vacancies),
]