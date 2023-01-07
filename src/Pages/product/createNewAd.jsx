import React, { useCallback, useEffect, useState } from "react";
import { Images } from "../../assets/Images/images";
import { useDropzone } from "react-dropzone";
import {
  Row,
  Col,
  Button,
  Input,
  Divider,
  Tabs,
  Dropdown,
  Checkbox,
} from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import Loader from "../../components/spinner";
import * as Styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import * as advertismentService from "../../Services/AdvertismentService";
import { Province } from "../../Utils/Constants";

const { TextArea } = Input;

// const thumbsContainer = {
//   display: "flex",
//   flexDirection: "row",
//   flexWrap: "wrap",
//   marginTop: 16,
// };

// const thumb = {
//   display: "inline-flex",
//   borderRadius: 2,
//   border: "1px solid #eaeaea",
//   marginBottom: 8,
//   marginRight: 8,
//   width: 100,
//   height: 100,
//   padding: 4,
//   boxSizing: "border-box",
// };

// const thumbInner = {
//   display: "flex",
//   minWidth: 0,
//   overflow: "hidden",
// };

// const img = {
//   display: "block",
//   width: "auto",
//   height: "100%",
// };

export default function CreateNewAd() {
  const { category } = useParams();
  const [loading, setLoading] = useState(false);
  const [postAd, setPostAd] = useState({
    id: "",
    title: "",
    tittle: "",
    category: category ? category : "",
    description: "",
    condition: "",
    buy: "",
    owner: "",
    province: "",
    city: "",
    town: "",
    residentialType: [],
    length: "",
    width: "",
    numberOfRooms: "",
    runningWater: "",
    electricity: "",
    restRoom: "",
    security: "",
    roomArrengement: "",
    isrentorsale: "",
    additional: "",
  });
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.auth);

  const onDrop = useCallback((acceptedFiles) => {
    let tmp = images;
    console.log(tmp.indexOf(acceptedFiles[0]));
    if (tmp.indexOf(acceptedFiles[0]) > -1 === true) {
      let index = tmp.indexOf(acceptedFiles[0]);
      tmp.splice(index, 1);
      setImages(tmp);
    } else {
      tmp.push(acceptedFiles[0]);
      setImages(tmp);
    }
    console.log(acceptedFiles[0]);
  }, []);

  const thumbs = images.map((file) => (
    <div style={Styles.thumb} key={file.name}>
      <div style={Styles.thumbInner}>
        <img
          src={URL.createObjectURL(file)}
          style={Styles.img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(URL.createObjectURL(file));
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      images.forEach((file) => URL.revokeObjectURL(URL.createObjectURL(file)));
  }, []);

  //react dripzone property
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept: { "image/png": [".png", ".jpeg"] },
      maxFiles: 5,
    });

  //input handling
  const onInputHandler = (e) => {
    setPostAd({ ...postAd, [e.target.name]: e.target.value });
  };
  const onSetChange = (checkedValues) => {
    setPostAd({ ...postAd, residentialType: checkedValues });
  };

  //post normal ad
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let formData = new FormData();
    formData.append("title", postAd.title);
    formData.append("category", 1);
    formData.append("description", postAd.description);
    formData.append("images", images);
    formData.append("condition", postAd.condition);
    formData.append("buy", postAd.buy);
    formData.append("owner", user.id);

    let response = await advertismentService.createAdvertisment(formData);

    if (response.success) {
      toast.success("Ad Submited successfully");
      setLoading(false);
    } else {
      toast.error("something error");
    }

    setLoading(false);
  };

  //post real state ad
  const onSubmitProperty = async (e) => {
    e.preventDefault();
    setLoading(true);

    let formData = new FormData();
    formData.append("tittle", postAd.tittle);
    formData.append("category", 1);
    formData.append("images", images);
    formData.append("condition", "good");
    formData.append("buy", postAd.buy);
    formData.append("province", postAd.province);
    formData.append("city", postAd.city);
    formData.append("town", postAd.town);
    formData.append("residential_type", postAd.residentialType);
    formData.append("living_area_square_meters", postAd.width * postAd.length);
    formData.append("running_water", postAd.runningWater);
    formData.append("electricity", postAd.electricity);
    formData.append("restroom", postAd.restRoom);
    formData.append("room_arrangement", postAd.roomArrengement);
    formData.append("bed_space", postAd.numberOfRooms);
    formData.append("security", postAd.security);

    let response = await advertismentService.createPropertyAdvertisment(
      formData
    );

    if (response.success) {
      toast.success("Ad Submited successfully");
      setImages([]);
      setLoading(false);
    } else {
      if (response.status === 404) {
        toast.error(response?.message);
      }
      console.log("Property POST >", response);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      toast.info("Login to post your ad and keep track of it in your account.");
    }
  }, []);

  const items = Province.map((item, key) => {
    return {
      key: key,
      label: (
        <a
          rel="noopener noreferrer"
          onClick={() => setPostAd({ ...postAd, province: item.name })}
        >
          {" "}
          {item.name}{" "}
        </a>
      ),
    };
  });

  return (
    <div className="createAdMainContainer">
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="createAdContainer">
            <div>
              <img src={Images.common.adLogo} className="placeAdLogo" />
            </div>
            <div>
              <Link to={"/placeAd"} className="cancelLink">
                Cancel
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={[0, 15]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="createAdMiddleContainer">
            <Row gutter={[20, 15]} className="subAdContainer">
              <Col xs={24} sm={24} md={14} lg={15} xl={16} className="col">
                <div className="contentOne">
                  {category === "Real estate" ? (
                    <form onSubmit={onSubmitProperty}>
                      {/* house /apartment ad */}

                      <p className="createAdTopic">Create New Property Ad</p>
                      <Input
                        placeholder="Title"
                        className="inputCreateAd"
                        name="tittle"
                        value={postAd.tittle}
                        onChange={onInputHandler}
                        required
                      />
                      <p className="inputText">
                        Include keywords such as brand color, size etc.
                      </p>

                      <div className="houseAdCont">
                        <Row gutter={[20, 30]}>
                          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <div>
                              <Dropdown
                                trigger={["click"]}
                                className="createDrop"
                                menu={{
                                  items,
                                }}
                              >
                                <a onClick={(e) => e.preventDefault()}>
                                  {postAd.province
                                    ? postAd.province
                                    : "Province"}
                                  <DownOutlined />
                                </a>
                              </Dropdown>
                            </div>
                          </Col>
                          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <Input
                              className="createDrop"
                              placeholder="City"
                              name="city"
                              value={postAd.city}
                              onChange={onInputHandler}
                              required
                            />
                          </Col>
                          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <Input
                              className="createDrop"
                              placeholder="Town"
                              name="town"
                              value={postAd.town}
                              onChange={onInputHandler}
                              required
                            />
                          </Col>
                        </Row>

                        <p className="imagesTopic">Images</p>
                        <div
                          className="inputCreateAd ImgesCont"
                          {...getRootProps()}
                        >
                          <input {...getInputProps()} />
                          <img
                            src={Images.common.camera}
                            className="cameraIcon"
                            alt="camera"
                          />

                          {isDragActive ? (
                            <p className="dropText"> Select your images here</p>
                          ) : (
                            <p className="dropText"> Select your images here</p>
                          )}
                        </div>
                        <aside style={Styles.thumbsContainer}>{thumbs}</aside>
                        {/* <input
                          type="file"
                          name="image"
                          onChange={(e) =>
                            setImagePreview(
                              URL.createObjectURL(e.target.files[0])
                            )
                          }
                        /> */}

                        <div className="residentialCont">
                          <p className="residetialHead">Residential Type</p>
                          <div>
                            <Checkbox.Group
                              style={{
                                width: "100%",
                              }}
                              onChange={(checkValues) =>
                                setPostAd({
                                  ...postAd,
                                  residentialType: checkValues,
                                })
                              }
                            >
                              <Row gutter={[0, 15]}>
                                <Col xs={24} sm={24} md={24} lg={5} xl={6}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="House"
                                  >
                                    House
                                  </Checkbox>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={5} xl={6}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="Apartment"
                                  >
                                    Apartment
                                  </Checkbox>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={7} xl={6}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="Shared Apartment"
                                  >
                                    Shared Apartment
                                  </Checkbox>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={7} xl={6}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="Boarding house"
                                  >
                                    Boarding house
                                  </Checkbox>
                                </Col>
                              </Row>
                            </Checkbox.Group>
                          </div>
                        </div>
                        <div className="AreaCont">
                          <p className="areaText">Living area(m2) </p>
                          <div className="areaCalculate">
                            <Input
                              className="inputCreate"
                              placeholder="Enter length"
                              type="number"
                              name="length"
                              value={postAd.length}
                              onChange={onInputHandler}
                            />
                            <p className="multiply">x</p>
                            <Input
                              className="inputCreate"
                              placeholder="Enter width"
                              type="number"
                              value={postAd.width}
                              name="width"
                              onChange={onInputHandler}
                            />
                          </div>

                          <p className="areaText roomsText">Number of rooms</p>
                          <div>
                            <Input
                              className="selectDropddown"
                              type="number"
                              placeholder="0"
                              value={postAd.numberOfRooms}
                              name="numberOfRooms"
                              onChange={onInputHandler}
                            />
                          </div>

                          <p className="areaText roomsText">Running water</p>
                          <div>
                            <Checkbox.Group
                              style={{
                                width: "100%",
                              }}
                              onChange={(checkValues) =>
                                setPostAd({
                                  ...postAd,
                                  runningWater: checkValues,
                                })
                              }
                            >
                              <Row gutter={[0, 12]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="Available"
                                  >
                                    Available
                                  </Checkbox>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="Unavailable"
                                  >
                                    Unavailable
                                  </Checkbox>
                                </Col>
                              </Row>
                            </Checkbox.Group>
                          </div>

                          <p className="areaText roomsText">Electricity</p>
                          <div>
                            <Checkbox.Group
                              style={{
                                width: "100%",
                              }}
                              onChange={(checkValues) =>
                                setPostAd({
                                  ...postAd,
                                  electricity: checkValues,
                                })
                              }
                            >
                              <Row gutter={[0, 12]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="Available"
                                  >
                                    Available
                                  </Checkbox>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="Unavailable"
                                  >
                                    Unavailable
                                  </Checkbox>
                                </Col>
                              </Row>
                            </Checkbox.Group>
                          </div>

                          <p className="areaText roomsText">Restroom</p>
                          <div>
                            <Checkbox.Group
                              style={{
                                width: "100%",
                              }}
                              onChange={(checkValues) =>
                                setPostAd({ ...postAd, restRoom: checkValues })
                              }
                            >
                              <Row gutter={[0, 12]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="Available"
                                  >
                                    Available
                                  </Checkbox>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="Unavailable"
                                  >
                                    Unavailable
                                  </Checkbox>
                                </Col>
                              </Row>
                            </Checkbox.Group>
                          </div>

                          <p className="areaText roomsText">Security</p>
                          <div>
                            <Checkbox.Group
                              style={{
                                width: "100%",
                              }}
                              onChange={(checkValues) =>
                                setPostAd({ ...postAd, security: checkValues })
                              }
                            >
                              <Row gutter={[0, 12]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="Available"
                                  >
                                    Available
                                  </Checkbox>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="Unavailable"
                                  >
                                    Unavailable
                                  </Checkbox>
                                </Col>
                              </Row>
                            </Checkbox.Group>
                          </div>

                          <p className="areaText roomsText">Room Arrangement</p>
                          <div>
                            <Checkbox.Group
                              style={{
                                width: "100%",
                              }}
                              onChange={(checkValues) =>
                                setPostAd({
                                  ...postAd,
                                  roomArrengement: checkValues,
                                })
                              }
                            >
                              <Row gutter={[0, 12]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="Single room"
                                  >
                                    Single room
                                  </Checkbox>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="Shared by two"
                                  >
                                    Shared by two
                                  </Checkbox>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="Shared by Three"
                                  >
                                    Shared by Three
                                  </Checkbox>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <Checkbox
                                    className="checkCreateProduct"
                                    value="Shared by Four"
                                  >
                                    Shared by Four
                                  </Checkbox>
                                </Col>
                              </Row>
                            </Checkbox.Group>
                          </div>

                          <p className="areaText roomsText">
                            Additional Information
                          </p>
                          <TextArea
                            className="inputCreateAd"
                            name="additional"
                            value={postAd.additional}
                            onChange={onInputHandler}
                            autoSize={{
                              minRows: 5,
                              maxRows: 5,
                            }}
                          />
                          <p className="inputText">
                            Give a brief description about what you are
                            advertising
                          </p>
                        </div>
                        <div className="tabsSection">
                          <Tabs defaultActiveKey="1">
                            <Tabs.TabPane tab="Sell" key="1">
                              <p className="tabText">Sell on price</p>
                              <Input
                                placeholder="Price"
                                className="inputCreateAd tabInput"
                                value={postAd.buy}
                                name="buy"
                                onChange={onInputHandler}
                              />
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Rent" key="2">
                              <p className="tabText">Monthly rentals</p>
                              <Input
                                placeholder="Price"
                                className="inputCreateAd tabInput"
                                value={postAd.buy}
                                name="buy"
                                onChange={onInputHandler}
                              />

                              <p className="tabText customtabText ">
                                Terms & Conditions
                              </p>
                              <TextArea
                                autoSize={{
                                  minRows: 5,
                                  maxRows: 5,
                                }}
                                placeholder="Type here"
                                className="inputCreateAd tabInput terms "
                              />
                            </Tabs.TabPane>
                          </Tabs>
                        </div>
                        <div className="shippingSection custombtnship">
                          <p className="shippingText">Shipping options</p>

                          <p className="offerText">Offer shipping</p>
                          <p className="shipingText">
                            The buyer will pay for shipping
                          </p>
                          <Link to="/PreviewAd">
                            <Button className="shipingButton previewBtn">
                              Preview ad
                            </Button>
                          </Link>
                          <Button className="shipingButton " htmlType="submit">
                            Post Ad
                          </Button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <form onSubmit={onSubmit}>
                      <p className="createAdTopic">Create New Ad</p>

                      <Input
                        placeholder="Title"
                        className="inputCreateAd"
                        name="title"
                        value={postAd.title}
                        onChange={onInputHandler}
                        required
                      />
                      <p className="inputText">
                        Include keywords such as brand color, size etc.
                      </p>
                      <div className="normlAdCont">
                        <Input
                          placeholder="Categorie"
                          className="inputCreateAd categoryInput"
                          name="category"
                          value={postAd.category}
                          onChange={onInputHandler}
                          required
                        />
                        <TextArea
                          placeholder="Description"
                          className="inputCreateAd categoryInput2"
                          autoSize={{ minRows: 5, maxRows: 5 }}
                          name="description"
                          value={postAd.description}
                          onChange={onInputHandler}
                        />
                        <p className="inputText">
                          Give a brief description about what you are
                          advertising
                        </p>

                        <p className="imagesTopic">Images</p>
                        <div
                          className="inputCreateAd ImgesCont"
                          {...getRootProps()}
                        >
                          <input {...getInputProps()} />
                          <img
                            src={Images.common.camera}
                            className="cameraIcon"
                            alt="camera"
                          />
                          <p className="dropText">Drop your images here</p>
                        </div>
                        <aside style={Styles.thumbsContainer}>{thumbs}</aside>
                        <p className="conditionText">Conditions</p>
                        <div className="btnGroup">
                          <Button
                            className="usedBtn"
                            onClick={() =>
                              setPostAd({ ...postAd, condition: "Used" })
                            }
                          >
                            Used
                          </Button>
                          <Button
                            className="usedBtn"
                            onClick={() =>
                              setPostAd({ ...postAd, condition: "New" })
                            }
                          >
                            New
                          </Button>
                        </div>
                        <Divider className="divider" />
                        <div className="tabsSection">
                          <Tabs defaultActiveKey="1">
                            <Tabs.TabPane tab="Buy Now" key="1">
                              <p className="tabText">Price</p>
                              <Input
                                placeholder="Price"
                                className="inputCreateAd tabInput"
                                name="buy"
                                value={postAd.buy}
                                onChange={onInputHandler}
                                required
                                type="number"
                              />
                            </Tabs.TabPane>
                            <Tabs.TabPane disabled tab="Auction" key="2">
                              <p className="tabText">Starting bid price</p>
                              <Input
                                placeholder="Price"
                                className="inputCreateAd tabInput"
                              />
                              <p className="tabText customtabText">
                                Bid duration
                              </p>
                              <Input
                                placeholder="Bid duration"
                                className="inputCreateAd tabInput"
                              />
                            </Tabs.TabPane>
                          </Tabs>
                        </div>
                        <Divider className="divider" />

                        <div className="shippingSection">
                          <p className="shippingText">Shipping options</p>

                          <p className="offerText">Offer shipping</p>
                          <p className="shipingText">
                            The buyer will pay for shipping
                          </p>
                          <Link to="/PreviewAd">
                            <Button className="shipingButton previewBtn">
                              Preview ad
                            </Button>
                          </Link>
                          <Button className="shipingButton" htmlType="submit">
                            {loading ? <Loader loading={loading} /> : "Post Ad"}
                          </Button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </Col>
              <Col xs={24} sm={24} md={10} lg={9} xl={8}>
                <div className="contentTwo">
                  <p className="adPreview">Ad Preview</p>
                  <div className="previewCont">
                    {images.length !== 0 && (
                      <img
                        src={URL.createObjectURL(images[0])}
                        alt="preview-img"
                        width="100%"
                        height="100%"
                      />
                    )}
                  </div>
                  <p className="adPreview">
                    {postAd?.title ? postAd.title : postAd.tittle}
                  </p>
                  <p className="adPreview">{postAd?.description}</p>
                  <p className="adPreview">
                    {postAd?.buy ? `K${postAd.buy}` : ""}
                  </p>
                </div>

                {/* <PreviewAd/> */}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
