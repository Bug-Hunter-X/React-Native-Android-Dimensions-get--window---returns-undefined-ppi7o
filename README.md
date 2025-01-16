# React Native Android Dimensions.get('window') returns undefined

This repository demonstrates a common issue encountered in React Native Android development where `Dimensions.get('window')` returns `undefined` or inaccurate dimensions. This often happens during the initial rendering phase.  The solution uses `useEffect` and `LayoutAnimation` to ensure the dimensions are correctly fetched after the layout is complete.

## Problem

The `Dimensions` API in React Native is designed to retrieve screen dimensions. However, accessing it too early, particularly on Android, can result in `undefined` values for `width` and `height`, leading to layout problems. 

## Solution

The solution involves using the `useEffect` hook to wait until the component has mounted and the layout has been calculated before accessing the dimensions.  We also leverage `LayoutAnimation` for smooth transitions as the component updates with the correct dimensions.
