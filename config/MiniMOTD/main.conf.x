# MiniMOTD Main Configuration

# Enable server list icon related features
icon-enabled=true
# Enable MOTD-related features
motd-enabled=true
# The list of MOTDs to display
# 
# - Supported placeholders: {onlinePlayers}, {maxPlayers}
# - Putting more than one will cause one to be randomly chosen each refresh
motds=[
    {
        # Set the icon to use with this MOTD
        #  Either use 'random' to randomly choose an icon, or use the name
        #  of a file in the icons folder (excluding the '.png' extension)
        #    ex: icon="myIconFile"
        icon=random
        line1="<rainbow>Another <bold>Quality <gradient:blue:red>Modpack 2"
        line2="<gradient:green:blue>v2.8.4c Out Now</gradient><black> | </black><blue>discord.gg/3SZsDNbhys"
    },
    {
        # Set the icon to use with this MOTD
        #  Either use 'random' to randomly choose an icon, or use the name
        #  of a file in the icons folder (excluding the '.png' extension)
        #    ex: icon="myIconFile"
        icon=random
        line1="<blue>Another <bold><red>Quality <italic><underlined><gradient:red:green>Modpack 2"
        line2="<red>[+] <bold>v2.8.4c</bold></red> [+] <italic><gradient:white:light_purple> ( Available on Curseforge )"
    }
]
player-count-settings {
    # Should the displayed online player count be allowed to exceed the displayed maximum player count?
    # If false, the online player count will be capped at the maximum player count
    allow-exceeding-maximum=false
    # Setting this to true will disable the hover text showing online player usernames
    disable-player-list-hover=false
    # Settings for the fake player count feature
    fake-players {
        # Modes: add, constant, minimum, random, percent
        # 
        # - add: This many fake players will be added
        #     ex: fake-players="3"
        # - constant: A constant value for the player count
        #     ex: fake-players="=42"
        # - minimum: The minimum bound of the player count
        #     ex: fake-players="7+"
        # - random: A random number of fake players in this range will be added
        #     ex: fake-players="3:6"
        # - percent: The player count will be inflated by this much, rounding up
        #     ex: fake-players="25%"
        fake-players="25%"
        # Enable fake player count feature
        fake-players-enabled=true
    }
    # Setting this to true will disable the player list hover (same as 'disable-player-list-hover'),
    # but will also cause the player count to appear as '???'
    hide-player-count=false
    # Changes the Max Players to be X more than the online players
    # ex: x=3 -> 16/19 players online.
    just-x-more-settings {
        # Enable this feature
        just-x-more-enabled=false
        x-value=3
    }
    # Changes the Max Players value
    max-players=15
    # Enable modification of the max player count
    max-players-enabled=true
}
