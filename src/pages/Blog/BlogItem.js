import React from "react";

import image1 from "../../assets/image/slider_nav4.jpg";

const BlogItem = () => {
  return (
    <div className="Blog-item">
      <div className="image_wrapper">
        <img className="w-full h-full object-cover" src={image1} alt="" />
      </div>
      <div className="blog-item-desc">
        <h2 className="title">MUST HAVE HANDBAGS</h2>
        <p className="blog-desc">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus.
        </p>

        <p className="blog-desc blog-slogan">
          Women think of all colors except the absence of color. I have said
          that black has it all. White too. Their beauty is absolute. It is the
          perfect harmony. – NikaShop
        </p>

        <p className="blog-desc">
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi.
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
