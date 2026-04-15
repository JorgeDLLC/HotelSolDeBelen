from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('4DM1N15T84D0R-M48K3T1NG/', admin.site.urls),
    path('api/', include('adds.urls')), # Conecta tu app
]

# ESTO ES VITAL: Permite ver las imágenes en el navegador durante desarrollo
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)