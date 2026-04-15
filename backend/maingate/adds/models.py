from django.db import models

# Create your models here.
class Add(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='adds/')
    start_date = models.DateField()
    end_date = models.DateField()
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title