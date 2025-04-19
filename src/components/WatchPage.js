import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CloseMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const [searchParams] = useSearchParams();
  const searchedVideo = searchParams.get("v");

  useEffect(() => {
    dispatch(CloseMenu());
  }, []);

  return (
    <>
      <div className="px-5">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchedVideo}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <div>
          <CommentsContainer />
        </div>
      </div>
    </>
  );
};

export default WatchPage;
