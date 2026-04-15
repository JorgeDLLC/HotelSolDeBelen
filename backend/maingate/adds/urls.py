from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AddViewSet

router = DefaultRouter()
router.register(r'adds', AddViewSet, basename='adds')

urlpatterns = [
    path('', include(router.urls)),
]