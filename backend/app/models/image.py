from django.db import models
from .base import BaseModel


class Image(BaseModel):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, default='')
    url = models.CharField(max_length=255)
    extension = models.CharField(max_length=5)

    def __str__(self):
        return self.url
