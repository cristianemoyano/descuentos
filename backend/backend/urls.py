from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from app import views

router = routers.DefaultRouter()     
router.register(r'todos', views.TodoView, 'todo')
router.register(r'commerces', views.CommerceView, 'commerce')
router.register(r'commerces/(?P<commerce_id>\d+)/addresses', views.CommerceAddressesView, 'commerce_addresses')

urlpatterns = [
	path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
