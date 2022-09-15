import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { fabric } from 'fabric';
import { IoTriangleSharp, IoText } from 'react-icons/io5';
import { BsFillSquareFill, BsFillCircleFill } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiImageAddFill, RiDeleteBin6Line } from 'react-icons/ri';

import {
  Flex,
  Box,
  Select,
  FormControl,
  Input,
  Button,
  Heading,
  Icon,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { saveProducts } from '../../Actions/productAction';

function Photoeditor({ passImg, imgURL }) {
  const [canvas, setCanvas] = useState('');
  const [fontFamily, setFontFamily] = useState('serif');
  const [fontSize, setFontSize] = useState(25);
  const [bgColor, setBgColor] = useState(''); // maybe used during css
  const [bold, setBold] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [italics, setItalics] = useState(false);
  const [selectedObj, setSelectedObj] = useState('text');
  const imageToEdit = useRef();
  const uploadImg = useRef();
  const canvasContainer = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector(state => state.productSaved);
  const { userInfo } = useSelector(state => state.userLogin);
  //const search = useLocation().search;
  //const imgName = search.split('=')[1];

  //const imgURL = imgName;
  let fonts = [
    'Arial',
    'Times New Roman',
    'Calibri',
    'Calisto MT',
    'Cambria',
    'Candara',
    'Monospace',
    'Sans-serif',
    'serif',
  ];
  let addText = (data, canvas) => {
    let text = new fabric.IText(data, {
      fontSize,
      fontFamily,
      fill: 'blue',
    });
    canvas.add(text).centerObject(text).setActiveObject(text).renderAll();
    return canvas;
  };
  let addShapes = (shape, canvas) => {
    let newShape;
    if (shape === 'circle') {
      newShape = new fabric.Circle({
        radius: 50,
        fill: 'lightBlue',
        //stroke: "green",
        //strokeWidth: 3,
      });
    } else if (shape === 'rect')
      newShape = new fabric.Rect({ width: 50, height: 50, fill: 'lightGreen' });
    else if (shape === 'triangle')
      newShape = new fabric.Triangle({
        width: 50,
        height: 50,
        fill: 'orange',
      });
    else if (shape === 'line')
      newShape = new fabric.Line([50, 100, 150, 100], {
        stroke: 'red',
        strokeWidth: 10,
      });

    canvas.add(newShape).setActiveObject(newShape);
    canvas.centerObject(newShape);
    return canvas;
  };
  let changeFont = newStyle => {
    let ele = canvas.getActiveObject();
    if (!ele) return;
    if (ele.text) ele.set(newStyle);
    if (newStyle.fontFamily) setFontFamily(newStyle.fontFamily);
    if (newStyle.fontSize) setFontSize(newStyle.fontSize);
    canvas.requestRenderAll();
  };
  let changeColor = (value, obj) => {
    if (obj.type === 'image') {
      let hue = value.h;
      hue = hue - 180;
      let normalizedHue = hue / 180;
      obj.filters[0].rotation = normalizedHue;
      obj.applyFilters();
    } else if (selectedObj === 'shape') obj.set({ fill: value });
    canvas.requestRenderAll();
  };
  let handleImg = e => {
    if (!e.target.files[0].type.includes('image')) {
      alert('You can only add images.');
      return;
    }
    let newImg = new Image();
    newImg.src = URL.createObjectURL(e.target.files[0]);
    newImg.onload = function () {
      let img = new fabric.Image(newImg);
      img.scaleToHeight(200);
      img.scaleToWidth(200);
      img.filters = [new fabric.Image.filters.HueRotation()];
      canvas.add(img).setActiveObject(img).centerObject(img);
    };
  };
  function saveImage(e) {
    const newProduct = {
      ...product,
      design: {
        image: canvas.toDataURL({
          format: 'png',
          quality: 0.8,
        }),
      },
    };
    dispatch(saveProducts(newProduct));
    if (!userInfo) {
      navigate('/signup?redirect=cart');
    } else navigate('/cart');
  }

  function downloadImage() {
    var a = document.createElement('a');
    a.href = canvas.toDataURL({
      format: 'png',
      quality: 0.8,
    });
    a.download = 'canvas.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  function hexToHSL(H) {
    // Convert hex to RGB first
    let r = 0,
      g = 0,
      b = 0;
    if (H.length === 4) {
      r = '0x' + H[1] + H[1];
      g = '0x' + H[2] + H[2];
      b = '0x' + H[3] + H[3];
    } else if (H.length === 7) {
      r = '0x' + H[1] + H[2];
      g = '0x' + H[3] + H[4];
      b = '0x' + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta === 0) h = 0;
    else if (cmax === r) h = ((g - b) / delta) % 6;
    else if (cmax === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return { h, s, l };
  }
  useEffect(() => {
    const outerCanvasContainer = canvasContainer.current;
    let sizeWidth = outerCanvasContainer.clientWidth,
      sizeHeight = (outerCanvasContainer.clientHeight * 90) / 100;
    let c = new fabric.Canvas('canvas', {
      right: '10px',
      margin: 0,
      height: sizeHeight,
      width: sizeWidth,
      preserveObjectStacking: true,
      backgroundColor: 'white',
    });
    let updateState = e => {
      let target = e.selected[0];
      if (target.crossOrigin) setSelectedObj('bgImg');
      else if (target.type === 'image') setSelectedObj('image');
      else if (!target.text) setSelectedObj('shape');
      else if (target.type === 'i-text') {
        setSelectedObj('text');
        setFontFamily(target.fontFamily);
        setFontSize(target.fontSize);
        setBold(target.fontWeight === 800);
        setItalics(target.fontStyle === 'italic');
        setUnderline(target.underline);
      }
    };
    c.on('selection:updated', e => updateState(e));
    c.on('selection:created', e => updateState(e));
    c.on('selection:cleared', e => setSelectedObj('none'));
    fabric.Image.fromURL(
      imgURL,
      img => {
        c.add(img);
        let initial = img.getOriginalSize();
        let toCompare =
          initial.width > initial.height ? initial.width : initial.height;
        let compareWith =
          initial.width > initial.height ? sizeWidth : sizeHeight;
        if (toCompare > compareWith && compareWith === sizeHeight)
          img.scaleToHeight(sizeHeight);
        else if (toCompare > compareWith && compareWith === sizeWidth)
          img.scaleToWidth(sizeWidth);
        img.filters = [new fabric.Image.filters.HueRotation()];
        c.add(img);
        c.centerObject(img);
        c.sendToBack(img);
      },
      {
        crossOrigin: 'anonymous',
        left: 0,
        top: 0,
        opacity: 1,
        minimumScaleTrigger: 1,
        lockMovementX: false /* ########### lock image movements from here #################### */,
        lockMovementY: false,
        lockScalingX: false,
        lockScalingY: false,
      }
    );

    setTimeout(() => {
      let can = c || canvas;
      can.renderAll();
    }, 5);

    setCanvas(c);
    window.onresize = function resizeCanvas() {
      let newCanvas = c || canvas;
      let sizeWidth = outerCanvasContainer.clientWidth,
        sizeHeight = (outerCanvasContainer.clientHeight * 90) / 100;
      sizeHeight =
        sizeHeight > window.innerHeight / 2
          ? sizeHeight
          : window.innerHeight / 2;
      //const ratio = newCanvas.getWidth() / newCanvas.getHeight();
      const containerWidth = sizeWidth;
      const scale = (containerWidth * 90) / 100 / newCanvas.getWidth();
      const zoom = newCanvas.getZoom() * scale;

      newCanvas.setDimensions({
        width: (containerWidth * 90) / 100,
        height: sizeHeight,
      });
      newCanvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
    };
  }, []);
  return (
    <Box
      background="#e1e1e1"
      w={'full'}
      h="100vh"
      p={['10px', '20px', '10px', '10px 60px']}
      fontSize={['10px', '13px', '15px']}
      overflow="hidden"
    >
      <FormControl
        className="top-contols"
        display="flex"
        p="5px"
        borderRadius="10px"
        justifyContent="space-evenly"
        alignItems="center"
        backgroundColor="white"
      >
        <Select
          className="fontFamily"
          placeholder="Font Family"
          size={['xs', 'sm']}
          variant="unstyled"
          w={['110px', '150px', '200px']}
          value={fontFamily}
          onChange={e => {
            let target = e.target;
            let value = target.options[target.selectedIndex].value;
            if (value) changeFont({ fontFamily: value });
          }}
          disabled={!(selectedObj === 'text')}
        >
          {fonts.map(font => (
            <option value={font} key={font}>
              {font}
            </option>
          ))}
        </Select>
        <Input
          className="fontSize"
          size={['xs', 'sm']}
          w={['50px', '70px', '80px']}
          pl="5px"
          value={fontSize}
          type="number"
          onChange={e => {
            let fontSize = e.target.value;
            if (fontSize) changeFont({ fontSize });
            else setFontSize('');
          }}
          disabled={!(selectedObj === 'text')}
        />
        <Input
          type="color"
          w={'100px'}
          value={bgColor}
          onChange={e => {
            let value = e.target.value;
            let color = hexToHSL(value);
            setBgColor(value);
            let imgToChange = canvas.getActiveObject();
            if (selectedObj === 'text') changeFont({ fill: `${value}` });
            else if (selectedObj === 'shape') changeColor(value, imgToChange);
            else if (selectedObj === 'image' || selectedObj === 'bgImg')
              changeColor(color, imgToChange);
          }}
        />
        <Flex
          className="text-styling"
          w={['40px', '60px', '80px', '100px']}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => {
              changeFont({ fontWeight: bold ? 500 : 800 });
              setBold(!bold);
            }}
          >
            <b>B</b>
          </span>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => {
              changeFont({ fontStyle: italics ? '' : 'italic' });
              setItalics(!italics);
            }}
          >
            <i>i</i>
          </span>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => {
              changeFont({ underline: !underline });
              setUnderline(!underline);
            }}
          >
            <u>U</u>
          </span>
        </Flex>
        <Button
          background="transparent"
          size="sm"
          onClick={() => {
            let ele = canvas.getActiveObject();
            if (!ele) return;
            if (!ele.lockMovementX) canvas.remove(canvas.getActiveObject());
          }}
          disabled={selectedObj === 'none' || selectedObj === 'bgImg'}
        >
          <Icon as={RiDeleteBin6Line} m="0 5px"></Icon>
          Delete
        </Button>
      </FormControl>
      <Flex
        mt={['0', '0', '40px']}
        justifyContent={['space-evenly', 'space-evenly', 'space-between']}
        direction={['column', 'column', 'row', 'row']}
        w={'full'}
        h="100%"
      >
        <Flex
          borderRadius="15px"
          className="side-controls"
          direction={['row', 'row', 'column', 'column']}
          justifyContent={['space-evenly']}
          alignItems="center"
          backgroundColor="white"
          p="20px 0"
          m={['0', '0 30px', '0']}
          h="fit-content"
        >
          <Box
            className="add-component"
            textAlign="center"
            m={['0', '0', '0px 0 30px 0 ']}
          >
            <Heading as="h4" size={['xs', 'sm', 'md']}>
              Image &#38; text
            </Heading>
            <Flex justifyContent="space-evenly" alignItems="center" m="10px 0">
              <Box
                className="add-image"
                onClick={() => {
                  uploadImg.current.click();
                }}
                cursor="pointer"
              >
                <Icon
                  as={RiImageAddFill}
                  w={['15px', '20px', '25px', '30px']}
                  h={['15px', '20px', '25px', '30px']}
                ></Icon>
                <input
                  type="file"
                  style={{ display: 'none' }}
                  ref={uploadImg}
                  onChange={e => handleImg(e)}
                />
              </Box>
              <Box
                className="add-text"
                cursor="pointer"
                onClick={() => {
                  setCanvas(addText('Type here', canvas));
                }}
              >
                <Icon
                  as={IoText}
                  w={['15px', '20px', '25px', '30px']}
                  h={['15px', '20px', '25px', '30px']}
                ></Icon>
              </Box>
            </Flex>
          </Box>
          <Box
            className="add-shapes"
            textAlign="center"
            m={['0', '0', '0px 0 30px 0 ']}
            w="200px"
          >
            <Heading as="h4" size={['xs', 'sm', 'md']}>
              Shapes
            </Heading>
            <Flex
              as="ul"
              style={{ listStyleType: 'none' }}
              alignItems="center"
              minW="100px"
              m="10px"
              justifyContent="space-evenly"
            >
              <li onClick={() => setCanvas(addShapes('rect', canvas))}>
                <Icon
                  as={BsFillSquareFill}
                  w={['15px', '20px', '25px', '30px']}
                  h={['15px', '20px', '25px', '30px']}
                  cursor="pointer"
                ></Icon>
              </li>
              <li onClick={() => setCanvas(addShapes('triangle', canvas))}>
                <Icon
                  as={IoTriangleSharp}
                  w={['15px', '20px', '25px', '30px']}
                  h={['15px', '20px', '25px', '30px']}
                  cursor="pointer"
                ></Icon>
              </li>
              <li onClick={() => setCanvas(addShapes('circle', canvas))}>
                <Icon
                  as={BsFillCircleFill}
                  w={['15px', '20px', '25px', '30px']}
                  h={['15px', '20px', '25px', '30px']}
                  cursor="pointer"
                ></Icon>
              </li>
              <li onClick={() => setCanvas(addShapes('line', canvas))}>
                <Icon
                  as={AiOutlineEdit}
                  w={['15px', '20px', '25px', '30px']}
                  h={['15px', '20px', '25px', '30px']}
                  cursor="pointer"
                ></Icon>
              </li>
            </Flex>
          </Box>
          <Flex direction="column" gap={2} align={'center'}>
            <Button
              size="sm"
              w={'full'}
              variant={'custom-black'}
              onClick={saveImage}
              fontSize={['10px', '13px', '15px']}
            >
              Add to Cart
            </Button>
            <Button
              size="sm"
              variant={'custom-black'}
              onClick={downloadImage}
              fontSize={['10px', '13px', '15px']}
            >
              Download
            </Button>
          </Flex>
        </Flex>
        <Flex
          className="editor"
          justifyContent="center"
          w={['100%', '100%', '70%', '70%']}
          alignSelf="stretch"
          mb="50px"
          minH="60vh"
          flexGrow={['0.5', '0.5', '0', '0']}
          ref={canvasContainer}
        >
          <canvas id="canvas"></canvas>
          <img
            src={imgURL}
            className="App-image"
            alt="tShirt"
            ref={imageToEdit}
            style={{ display: 'none' }}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Photoeditor;
