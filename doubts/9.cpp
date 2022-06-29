#include <iostream>
#include <climits>
using namespace std;

int main()
{
    int N;
    cin >> N;
    int A[N];
    int K;
    cin >> K;
    for (int i = 0; i < N; i++)
    {
        cin >> A[i];
    }
    for (int a = 0; a < N; a++)
    {
        int min;
        for (int i = 0; i < N; i++)
        {
            min = INT_MAX;
            if (min > A[i])
            {
                min = A[i];
            }
        }
        cout << "min: " << min << endl;
        for (int k = 0; k < N; k++)
        {
            if (A[k] == 0)
            {
                continue;
            }
            A[k] -= min;
        }
        int sum = 0;
        for (int h = 0; h < N; h++)
        {
            sum += A[h];
        }
        if (sum <= K)
        {
            break;
        }
    }
    for (int i = 0; i < N; i++)
    {
        if (A[i] < 0)
        {
            A[i] = 0;
        }
        cout << " " << A[i];
    }
    return 0;
}