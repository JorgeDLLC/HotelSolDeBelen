from rest_framework import viewsets
from django.utils import timezone
from .models import Add
from .serializers import AddSerializer
from django.shortcuts import render

class AddViewSet(viewsets.ModelViewSet):
    serializer_class = AddSerializer

    def get_queryset(self):
        now = timezone.now()
        return Add.objects.filter(
            active=True, 
            start_date__lte=now, 
            end_date__gte=now)
