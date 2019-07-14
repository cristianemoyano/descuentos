from django.db import models
from django.contrib.auth.models import User

from .base import BaseModel
from .image import Image


class Category(BaseModel):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, default='')

    def __str__(self):
        return self.title


class Commerce(BaseModel):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, default='')
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING)
    logo = models.OneToOneField(Image, on_delete=models.DO_NOTHING)
    phone = models.CharField(max_length=255)
    website = models.CharField(max_length=255)
    facebook = models.CharField(max_length=255, blank=True, default='')
    twitter = models.CharField(max_length=255, blank=True, default='')
    instagram = models.CharField(max_length=255, blank=True, default='')
    owner = models.ForeignKey(User, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.title


class CommerceAddress(BaseModel):
    commerce = models.ForeignKey(Commerce, on_delete=models.DO_NOTHING)
    address_one = models.CharField(max_length=255)
    address_two = models.CharField(max_length=255, blank=True, default='')
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip_code = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    latitude = models.CharField(max_length=255, blank=True, default='')
    longitude = models.CharField(max_length=255, blank=True, default='')

    def __str__(self):
        return "{c} - {one}, {state}, {country}".format(
            c=self.commerce.title,
            one=self.address_one,
            state=self.state,
            country=self.country,
        )


class CommerceBenefitType(BaseModel):
    code = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, default='')

    def __str__(self):
        return self.title


class CommerceBenefit(BaseModel):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, default='')
    benefit_type = models.ForeignKey(
        CommerceBenefitType, on_delete=models.DO_NOTHING)
    commerce_address = models.ForeignKey(
        CommerceAddress, on_delete=models.DO_NOTHING)
    expiration = models.DateTimeField(blank=True, null=True)
    published_by = models.ForeignKey(User, on_delete=models.DO_NOTHING)

    def __str__(self):
        return "{title} - {commerce}".format(
            title=self.title,
            commerce=self.commerce_address,
        )


class CommerceUserBenefitStatus(BaseModel):
    code = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, default='')

    def __str__(self):
        return self.title


class CommerceUserBenefit(BaseModel):
    benefit = models.ForeignKey(CommerceBenefit, on_delete=models.DO_NOTHING)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    status = models.ForeignKey(
        CommerceUserBenefitStatus, on_delete=models.DO_NOTHING)

    class Meta:
        index_together = [
            ("benefit", "user", "status"),
        ]

    def __str__(self):
        return "{benefit} - {user} - {status}".format(
            benefit=self.benefit,
            user=self.user,
            status=self.status,
        )
