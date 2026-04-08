from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Member
from ..serializer import MemberSerializer

class MemberListAPIView(APIView):
    def get(self, request):
        members = Member.objects.all()
        serializer = MemberSerializer(members, many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = MemberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MemberDetailAPIView(APIView):
    def get_object(self, member_id):
        try:
            return Member.objects.get(id=member_id)
        except Member.DoesNotExist:
            return none

    def get(self,request,member_id):
        member = self.get_object(member_id)
        if not member:
            return Response({'error':'Member not found'},status=status.HTTP_404_NOT_FOUND)
        serializer = MemberSerializer(member)
        return Response(serializer.data)

    def put(self, request, member_id):
        member = self.get_object(member_id)
        if not member:
            return Response({'error':'Member not found'},status=status.HTTP_404_NOT_FOUND)

        serializer = MemberSerializer(member,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, member_id):
        member = self.get_object(member_id)
        if not member:
            return Response({'error':'Member not found'},status=status.HTTP_404_NOT_FOUND)
        member.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


