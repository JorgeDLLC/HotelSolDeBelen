from rest_framework import serializers
from .models import Add

class AddSerializer(serializers.ModelSerializer):
    class Meta:
        model = Add
        fields = ['id', 'title', 'image', 'start_date', 'end_date', 'active']