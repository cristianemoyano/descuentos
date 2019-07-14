from rest_framework import serializers
from .models.todo import Todo
from .models.commerce import (
    Commerce,
    Category,
    CommerceAddress,
    CommerceBenefit,
    CommerceBenefitType,
)
from .models.image import Image


class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'id',
            'title',
            'description',
        )


class CommerceSerializer(serializers.ModelSerializer):
    logo_url = serializers.ReadOnlyField(source='logo.url')
    category = CategorySerializer()

    class Meta:
        model = Commerce
        fields = (
            'id',
            'title',
            'description',
            'category',
            'logo_url',
            'phone',
            'website',
            'facebook',
            'twitter',
            'instagram',
            'created_date',
            'modified_date',
            'deleted',
        )

    def create(self, validated_data):
        category_request = validated_data.pop('category')
        logo = Image.objects.get(title='default')
        try:
            category_model = Category.objects.get(
                title=category_request['title'])
        except Category.DoesNotExist:
            category_model = Category.objects.create(**category_request)

        commerce = Commerce.objects.create(
            logo=logo,
            category=category_model,
            **validated_data
        )
        return commerce


class CommerceAddressSerializer(serializers.ModelSerializer):
    commerce = CommerceSerializer()

    class Meta:
        model = CommerceAddress
        fields = (
            'id',
            'commerce',
            'address_one',
            'address_two',
            'city',
            'state',
            'zip_code',
            'country',
            'latitude',
            'longitude',
        )


class CommerceBenefitTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = CommerceBenefitType
        fields = (
            'id',
            'code',
            'title',
            'description',
        )


class CommerceBenefitSerializer(serializers.ModelSerializer):
    commerce_address = CommerceAddressSerializer(read_only=True)
    benefit_type = CommerceBenefitTypeSerializer(read_only=True)

    class Meta:
        model = CommerceBenefit
        fields = (
            'id',
            'title',
            'description',
            'benefit_type',
            'commerce_address',
            'expiration',
        )
