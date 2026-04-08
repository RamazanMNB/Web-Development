from rest_framework import generics
from ..models import Member
from ..serializer import MemberSerializer

class MemberListAPIView(generics.ListCreateAPIView):
    queryset = Member.objects.all()
    serializer_class =MemberSerializer

class MemberDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    lookup_url_kwarg = ('member_id')


