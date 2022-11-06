import React from "react";
import { TFunction } from "react-i18next";

interface Props {
  t: TFunction<"ns1">;
}

const MainTextTop: React.FC<Props> = ({ t }: Props) => {
  return (
    <>
      <h1>{t("mobile_clothes_intake")}</h1>
      <p>{t("we_serve_immigrants")}</p>
      <p>
        {t("want_to_donate")}{" "}
        <a href="mailto: mobileclothes@bmccs.org">{t("send_email")}</a>
        {t("with_name_and_phone")}
      </p>
      <p>testing pushes</p>
      <p>
        {t("donate_wishlist")}
        <br />
        <a
          href="http://tgt.gifts/MobileClothes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Target
        </a>
        <br />
        <a
          href="https://amzn.to/2OV6Xpj"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazon
        </a>
      </p>
    </>
  );
};

export default MainTextTop;
