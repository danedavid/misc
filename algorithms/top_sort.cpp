/*
Implementation of Topological Sort in a Directed Acyclic Graph (input as edge List)
using STL containers. The algorithm is from CLRS: ALgorithms Unlocked.

Author	:	Dane David
Date	:	27/5/2017

Input of form:
<no of edges>
n times <u,v>

Note: Vertex indices should start from 0
*/

#include<iostream>
#include<vector>
#include<tuple>
#include<list>
using namespace std;
typedef tuple<int,int> edge;

int main()
{
	unsigned int no_edges, size = 0;
	int x,y;
	
	//	program takes the graph as edge list, thus
	cin>>no_edges;
	
	vector<edge> graph;
	list<int> next, ordered;
	edge elem;
	int vertex;
	
	for(unsigned int i=0;i<no_edges;i++){
		cin>>x>>y;
		//	the larger index of a vertex is the size-1 for indices 0..to..n
		if( x > size )
			size = x;
		if( y > size )
			size = y;
		elem = make_tuple(x,y);
		graph.push_back(elem);
	}
	//	actual size is largest index plus 1
	++size;
	
	//	IN_DEGREE : to store no. of edges towards each vertex
	unsigned int in_degree[size] = {0};
	
	//	compute IN_DEGREE for each vertex
	for(unsigned int i=0;i<size;i++){
		for(auto elem : graph){
			if( get<0>(elem) == i ){
				++in_degree[get<1>(elem)];
			}
		}
	}
	
	//	NEXT : to store vertices with zero IN_DEGREE
	for(unsigned int i=0;i<size;i++){
		if(in_degree[i] == 0)
			next.push_back(i);
	}
	
	while( !(next.empty()) ){
		//	pop each vertex u from NEXT
		vertex = next.front();
		next.pop_front();
		// push u into ORDERED : used to store the ordered list of edges
		ordered.push_back(vertex);
		//	for each element v connected to u, decrement IN_DEGREE by 1
		for(auto elem : graph){
			if( get<0>(elem) == vertex ){
				--in_degree[get<1>(elem)];
					if( in_degree[get<1>(elem)] == 0 )
						next.push_back(get<1>(elem));
			}
		}
	}
	
	//	print output
	for(auto list_elem : ordered)
		cout<<list_elem<<"->";
	cout<<"null\n";	
	
	return 0;
}

