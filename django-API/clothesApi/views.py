from django.http import JsonResponse
from .models import Item
from .serializers import ItemSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
def item_list(request):
  
  if request.method == 'GET':
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    
    return JsonResponse({'items': serializer.data}, safe=False)
  
  # if request.method == 'POST':
  #   serializer = ItemSerializer(data=request.data)
  #   if serializer.is_valid():
  #     serializer.save()
  #     return Response(serializer.data, status=status.HTTP_201_CREATED)
  #   return Response(serializer.errors)
  #get all the items
  #serialize them
  #return JSON

@api_view(['GET'])
def get_item(request, id):
  try:
    item = Item.objects.get(pk=id)
  except Item.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  
  if request.method == 'GET':
    serializer = ItemSerializer(item)
    return Response(serializer.data)