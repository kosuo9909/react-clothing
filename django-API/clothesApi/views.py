from django.http import JsonResponse
from .models import Item
from .serializers import ItemSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer

from django.contrib.auth import login

from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView

# Register API


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)


@api_view(['GET'])
def item_list(request):

    if request.method == 'GET':
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)

        return JsonResponse({'items': serializer.data}, safe=False)


@api_view(['GET'])
def get_item(request, id):
    try:
        item = Item.objects.get(pk=id)
    except Item.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ItemSerializer(item)
        return Response(serializer.data)


@api_view(['GET'])
def get_season(request, id):
    try:
        items = Item.objects.filter(season=id)

    except Item.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':

        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)
