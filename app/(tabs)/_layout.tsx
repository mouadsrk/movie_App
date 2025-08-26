import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {images} from "@/constants/images"
import { icons } from '@/constants/icons'


const TabIcon = ({ focused , icon , title} : any) =>
{
    if (focused)
    {
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[90px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
                >
            <Image source={icon} 
                tintColor="#151212"
                className='size-5'
            />
            <Text
                className='ml-2 text-base font-semibold text-secondary'
            >{title}</Text>
        </ImageBackground>
        )
    }
    return (
        <View  className='items-center justify-center mt-4 rounded-full size-full'>
            <Image source={icon}
            tintColor="#a8b5db"
            className='size-5'
            />
        </View>
    )
}

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel : false,
            tabBarItemStyle : {
                width : '100%',
                height : '100%' ,
                justifyContent : 'center',
                alignItems : 'center'
            },
            tabBarStyle :  
            {
                padding : 0 ,
                backgroundColor : '#0f0d23',
                borderRadius : 50 , 
                marginHorizontal : 22 , 
                marginBottom : 36 ,
                height : 52 ,
                position : 'absolute' ,
                overflow : 'hidden' ,
                borderWidth : -1 ,
                borderTopWidth : -1 ,
                borderLeftWidth : -1 , 
                borderRightWidth : -1 ,
                borderBottomWidth : -1 ,
                borderColor : '#0f0d23',              
            }
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title : "Home" ,
                headerShown : false ,
                tabBarIcon : ({focused}) => (
                    <TabIcon
                    focused={focused} 
                    icon={icons.home}
                    title="Home" 
                    />
                )
            
            }}
        />
          <Tabs.Screen
        name="search"
        options={{  title : "Search" ,
             headerShown: false ,
             tabBarIcon : ({focused}) => (
                <TabIcon
                focused={focused} 
                icon={icons.search}
                title="Search" 
                />
            )
            }}
    />
    <Tabs.Screen
        name="saved"
        options={{  title : "Saved" ,
             headerShown: false , 
             tabBarIcon : ({focused}) => (
                <TabIcon  
                    focused={focused} 
                    icon={icons.save}
                    title="Saved" 
                    />
            )
        }}
        />
  
        <Tabs.Screen
            name="profile"
            options={{ title: "Profile",
                 headerShown: false ,
                 tabBarIcon : ({focused}) => (
                    <TabIcon
                    focused={focused} 
                    icon={icons.person}
                    title="Profile" 
                    />
                )
                }}
        />
    </Tabs>

  )
}

export default _layout

const styles = StyleSheet.create({})