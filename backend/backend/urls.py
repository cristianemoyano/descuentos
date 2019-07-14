from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from app import views

router = routers.SimpleRouter(trailing_slash=False)
router.register(r'todo', views.TodoView, 'todo-list')
router.register(r'commerces', views.CommerceView, 'commerces-list')
router.register(r'commerces/', views.CommerceView, 'commerces-detail')
router.register(r'commerces/benefits', views.CommerceBenefitView, 'commerce_benefits-list')
router.register(r'commerces/benefits/', views.CommerceBenefitView, 'commerce_benefits-detail')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', include('accounts.urls')),
]
