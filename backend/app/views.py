from rest_framework import viewsets
from .serializers import (
    TodoSerializer,
    CommerceSerializer,
    CommerceBenefitSerializer,
    CommerceAddressSerializer,
)
from .models.todo import Todo
from .models.commerce import (
    Commerce,
    CommerceAddress,
    CommerceBenefit,
)


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


class CommerceView(viewsets.ModelViewSet):
    serializer_class = CommerceSerializer
    queryset = Commerce.objects.all()


class CommerceBenefitView(viewsets.ModelViewSet):
    serializer_class = CommerceBenefitSerializer
    queryset = CommerceBenefit.objects.all()


class CommerceAddressesView(viewsets.ModelViewSet):
    serializer_class = CommerceAddressSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        commerce_id = self.kwargs['commerce_id']
        return CommerceAddress.objects.filter(commerce__pk=commerce_id)
