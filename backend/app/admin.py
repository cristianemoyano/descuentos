from django.contrib import admin
from .models.todo import Todo
from .models.commerce import (
    Category,
    Commerce,
    CommerceAddress,
    CommerceBenefitType,
    CommerceBenefit,
    CommerceUserBenefit,
    CommerceUserBenefitStatus,
)
from .models.image import Image


class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')


# Register your models here.
admin.site.register(Todo, TodoAdmin)

admin.site.register(Category)
admin.site.register(Image)

admin.site.register(Commerce)
admin.site.register(CommerceAddress)
admin.site.register(CommerceBenefit)
admin.site.register(CommerceBenefitType)
admin.site.register(CommerceUserBenefit)
admin.site.register(CommerceUserBenefitStatus)
