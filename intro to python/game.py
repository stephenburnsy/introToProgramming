import time
import random

# function for talking to the user.
def talkToPlayer(textToDisplay):
    print(textToDisplay)
    # time.sleep(2)

# function to display the intro to game
def intro(weapon, randomEnemy):
    talkToPlayer("You find yourself standing in an open field, filled with grass and yellow wildflowers.")
    talkToPlayer("Rumor has it that a wicked fairie is somewhere around here, and has been terrifying the nearby village.")
    talkToPlayer("Enter 1 to knock on the door of the house.")
    talkToPlayer("Enter 2 to peer into the cave.")
    talkToPlayer("What would you like to do?")

# house options  
def house(weapon, randomEnemy):
    talkToPlayer("You approach the door of the house.")
    talkToPlayer("You are about to knock when the door opens and out steps a "+ randomEnemy+ ".")
    talkToPlayer("Eep! This is the "+ randomEnemy+ "'s house!")
    talkToPlayer("The "+ randomEnemy + " attacks you!")
    if "sword" not in weapon:
        talkToPlayer("You feel a bit under-prepared for this, what with only having a tiny dagger.")
    
    while True:
        choice2 = input("Would you like to (1) fight or (2) run away?")
        if choice2 == "1":
            fight(weapon, randomEnemy)
            play_again()
            break 
        
        if choice2 == "2":
            talkToPlayer("You run back into the field. Luckily, you don't seem to have been followed.")
            field(weapon, randomEnemy)
            break

def cave(weapon, randomEnemy):
    if "sword" in weapon:
        talkToPlayer("You peer cautiously into the cave.")
        talkToPlayer("You\'ve been here before, and gotten all the good stuff. It\'s just an empty cave now.")
        talkToPlayer("You walk back to the field.")
    else:
        talkToPlayer("You peer cautiously into the cave.")
        talkToPlayer("It turns out to be only a very small cave.")
        talkToPlayer("Your eye catches a glint of metal behind a rock.")
        talkToPlayer("You have found the magical Sword of Ogoroth!")
        talkToPlayer("You discard your silly old dagger and take the sword with you.")
        talkToPlayer("You walk back out to the field.")
        print(weapon)
        weapon.append("sword")
    print(weapon)
    field(weapon, randomEnemy)

def field(weapon, randomEnemy):
    talkToPlayer("Enter 1 to knock on the door of the house.")
    talkToPlayer("Enter 2 to peer into the cave.")
    talkToPlayer("What would you like to do?")
    while True:
        choice1 = input("(Please enter 1 or 2.)")
        if choice1 == "1":
            house(weapon, randomEnemy)
            break
        elif choice1 == "2":
            cave(weapon, randomEnemy)
            break

def fight(weapon, randomEnemy):
    if "sword" in weapon:
        talkToPlayer("As the "+ randomEnemy+ " moves to attack, you unsheath your new sword.")
        talkToPlayer("The Sword of Ogoroth shines brightly in your hand as you brace yourself for the attack.")
        talkToPlayer("But the " + randomEnemy + "takes one look at your shiny new toy and runs away!")
        talkToPlayer("You have rid the town of the " + randomEnemy + ". You are victorious!")
    else:
        talkToPlayer("You do your best...")
        talkToPlayer("but your dagger is no match for the " + randomEnemy + ".")
        talkToPlayer("You have been defeated!")

def play_again():
    again = input("Would you like to play again? (y/n)").lower()
    if again == "y":
        talkToPlayer("Excellent! Restarting the game ...")
        play_game()
    elif again == "n":
        talkToPlayer("Thanks for playing! See you next time.")
    else:
        play_again()

def play_game():
    weapon = []
    enemies = ["Troll", "Dragon", "Pirate", "Ork", "Gargoyle"]
    randomEnemy:str = random.choice(enemies)
    print(randomEnemy)
    intro(weapon, randomEnemy)
    field(weapon, randomEnemy)


play_game()
