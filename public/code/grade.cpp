#include <iostream>
#include <cstring>

using namespace std;

int main()
{
    string key = "AAAAAAAAAAAAAAAAAAAAAAAAA"; //edit this to your answer key
    string contestname = "Placeholder Contest"; //edit this to your contest name 
    
    string username{};
    string answers{};

    double score = 0;
    
    cout << "What is the username of the submitter?\n";
    
    cin >> username;
    
    cout << "What answers did they submit?\n";
    
    while (answers.length() != 25) {
        cin >> answers;
    }
    
    for (int i = 0; i < 25; i++) {
        if (answers.at(i) == 'X'){
            score = score + 1.5;
        }
        if (answers.at(i) == key.at(i)){
            score = score + 6;
        }
    }
    
    cout << "\n" << "Hi " << username << ",\n\n" << "Congratulations on your score of " << score << " on the " << contestname << "! A couple of optional questions:\n\n";
    
    cout << "1) What do you think the AIME floor would be, based on recent standards? (Keep in mind that recent AMC 10s have admitted more than the top 2.5% into AIME.)\n\n";
    cout << "2) What was/were your favorite question(s)?";
}