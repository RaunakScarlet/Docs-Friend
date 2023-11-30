
![icon128](https://github.com/RaunakScarlet/Font-Friend/assets/86217548/a7f897d3-dcfb-4081-8b54-4b94db035b5e)

# Font Friend

![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 

A open source customisable font formatter chrome extension tool which is mainly built for making user's readability experience better.

<p align="center">
  <img width="496" alt="Screenshot 2023-11-30 at 2 58 23 PM" src="https://github.com/RaunakScarlet/Font-Friend/assets/86217548/b92a0028-dacd-49c7-9818-838aec6a8900">
</p>

<p align="center">
  <img width="1433" alt="Screenshot 2023-11-30 at 3 00 27 PM" src="https://github.com/RaunakScarlet/Font-Friend/assets/86217548/febc6304-45b6-49b1-90b4-16a88bc4ff31">

</p>


<p align="center">
 <img width="1424" alt="Screenshot 2023-11-30 at 3 01 37 PM" src="https://github.com/RaunakScarlet/Font-Friend/assets/86217548/88b3e506-1f2f-4b5e-bf51-668450cb7f2e">

</p>

## Features
* only 1 dependenciy for styling purpose
* light weight chrome extension
* Perform some action on font of the web page
* Fully customizable using font style, color, size
* Request more features...


## Getting Started
 #### NPM
  ###### installation
  <p>The font friend chrome extension is yet to be released to the chrome store as it will be under review. It take few days to be available on chrome store.</p>
  <p>Mean while you can download the file from given link and experience its awsome utility features</p>

  [Download Link](https://drive.google.com/drive/folders/1KbRO1GbgL5_b1XKUnlEMSaAVlF9F-K-y?usp=drive_link)

<h4>Steps</h4>
 
  <p>1. download the file</p>
   <p>2. click on the extension button of chrome browser</p>
   <p>3. click on manage extension</p>
   <p>4. enable developer mode in manage chrome extension at top right corner</p>
   <p>5. click on load unpacked at top left corner</p>
   <p>6. upload the downloaded file</p>
   experience awsome reading time
  
 
## Permissions

- **scripting**: Execute scripts for enhanced functionality.
- **activeTab**: Interact with the currently active tab for seamless customization.
- **storage**: Access local storage to save personalized font settings.

## Host Permissions

- **http://*/*, https://*/***: Modify content on any website for a consistent experience.

## Icons

- Various icon sizes (16x16, 32x32, 48x48, 128x128) for a recognizable presence in your browser.

## Support and Feedback

If you encounter issues or have suggestions, feel free to reach out. Your feedback is crucial in improving Font Friend.

# Font Color Component

The Font Color component is part of the Font Friend Chrome extension, allowing users to customize the text color on their favorite websites. This React component provides a simple and intuitive interface for selecting and applying different text colors.

<p align="center">
<img width="1411" alt="Screenshot 2023-11-30 at 5 24 58 PM" src="https://github.com/RaunakScarlet/Font-Friend/assets/86217548/dfded803-96ea-4f96-bad3-f95d3751de4b">


</p>


### font color code

```
 let [tab] = await chrome.tabs.query({ active: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            args: [currentColor],
            func: (currentColor) => {
                let allElements = document.querySelectorAll("*");
                allElements.forEach(function (element) {
                    element.style.color = currentColor;
                });
            },
        });
```



## Usage

1. **Color Selection Buttons**:
    - Click on the color selection buttons to instantly change the font color.
  
2. **Custom Color Option**:
    - Click on the "custom" button to reveal a color picker for a more personalized choice.
    - Adjust the color using the color picker, and the font color will update accordingly.

3. **Reset to Default**:
    - Use the "reset" button to revert the font color to the default color on the current webpage.
  
      

# Font Style Component

The Font Style component is a part of the Font Friend Chrome extension, designed to enable users to customize the font style on their favorite websites. This React component provides a user-friendly interface for selecting and applying various font styles.

<p align="center">
<img width="924" alt="Screenshot 2023-11-30 at 5 13 52 PM" src="https://github.com/RaunakScarlet/Font-Friend/assets/86217548/b0ffa72f-1656-463e-8a67-b5b04136b648">


</p>
### font style code

```
  let [tab] = await chrome.tabs.query({ active: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            args: [currentText],
            func: (currentText) => {
                let allElements = document.querySelectorAll("*");
                allElements.forEach(function (element) {
                    element.style.fontFamily = currentText;
                });
            },
        });
```



## Usage

1. **Style Selection Buttons**:
    - Click on the style selection buttons to instantly change the font style.

2. **Custom Style Option**:
    - Click on the "custom" button to reveal a dropdown menu with additional font style options.
    - Select a font style from the dropdown, and the font style will update accordingly.

3. **Reset to Default**:
    - Use the "reset" button to revert the font style to the default style on the current webpage.
## Font Style Options

The following font styles are available in the dropdown menu:

- Arial, sans-serif
- Didot, serif
- Courier, monospace
- Snell Roundhand, cursive
- Luminari, fantasy
- Jazz LET, fantasy

...and many more!

Feel free to add or customize font styles in the `select` dropdown options.

# Font Size Component

The Font Size component is a part of the Font Friend Chrome extension, providing users with the ability to easily adjust the font size on their favorite websites. This React component offers a variety of preset font sizes and a custom option for a personalized experience.

<p align="center">
<img width="1238" alt="Screenshot 2023-11-30 at 5 23 08 PM" src="https://github.com/RaunakScarlet/Font-Friend/assets/86217548/e1f44366-3706-4a9a-bfa4-19da9c597c5d">


</p>
### font size code

```
  let [tab] = await chrome.tabs.query({ active: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            args: [currentSize],
            func: (currentSize) => {
                let allElements = document.querySelectorAll("*");
                allElements.forEach(function (element) {
                    element.style.fontSize = currentSize;
                });
            },
        });
```

## Usage

1. **Font Size Buttons**:
    - Click on the font size buttons to instantly change the font size on the current webpage.

2. **Custom Font Size Option**:
    - Click on the "custom" button to reveal a dropdown menu with a variety of font sizes.
    - Select a font size from the dropdown, and the font size will update accordingly.

3. **Reset to Default**:
    - Use the "reset" button to revert the font size to the default size on the current webpage.

## Implementation Details

- The component utilizes the React state hook (`useState`) to manage the current font size.
- It uses the `useEffect` hook to apply the font size changes when the component mounts or when the current font size state changes.
- The `chrome.scripting.executeScript` function is employed to dynamically update the font size on the active webpage.


## Dependencies

- React
- `react-icons/fa` for the arrow icon.

## Font Size Options

- The component offers a variety of preset font sizes in buttons for quick selection.
- Users can choose custom font sizes from the dropdown menu.


## License

This project is licensed under the [MIT License](LICENSE).

Thank you for choosing Font Friend for a delightful web typography experience!


