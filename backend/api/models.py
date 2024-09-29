from django.db import models

# Create your models here.
class UserInfo(models.Model):

    LANGUAGE_CHOICES = {
        "EN": "English",
        "SP": "Spanish",
        "PT": "Portuguese",
        "CN": "Chinese"
    }

    username = models.CharField(max_length=30)
    language = models.CharField(
        choices=LANGUAGE_CHOICES,
        default="EN"
    )

    def __str__(self):
        return self.title