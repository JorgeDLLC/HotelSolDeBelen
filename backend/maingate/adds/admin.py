from django.contrib import admin
from .models import Add
from django.utils.html import format_html

@admin.register(Add)
class AddAdmin(admin.ModelAdmin):
    # Columnas que se verán en la lista
    list_display = ('title', 'start_date', 'end_date', 'active', 'show_image')
    list_filter = ('active', 'start_date')
    
    # Para previsualizar la imagen en el listado del Admin
    def show_image(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="width: 50px; height: auto;" />', obj.image.url)
        return "Sin imagen"
    
    show_image.short_description = 'Vista Previa'