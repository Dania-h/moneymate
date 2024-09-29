from django.shortcuts import render
from rest_framework import generics
from .models import UserInfo
from .serializers import UserInfoSerializer

# Create your views here.
class UserInfoCreate(generics.ListCreateAPIView):
    serializer_class = UserInfoSerializer