import Header from "../../components/header";
import Information from "../../components/survey/info";
import Range from "../../components/survey/3/range";
import Buttons from "../../components/survey/buttons";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AuthWrapper from "../../components/authwrapper";

const TingkatKesiapanPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (
      !localStorage.getItem("durasi") ||
      !localStorage.getItem("durasiTidur") ||
      !localStorage.getItem("tingkatKantuk") ||
      !localStorage.getItem("tingkatLelah")
    ) {
      router.push("/");
    }
  }, [router]);
  return (
    <AuthWrapper>
      <>
        <Information>
          <p>
            Berapa tingkat kesiapan Anda untuk melakukan pekerjaan yang akan
            Anda lakukan? (bukan kegiatan uji kelelahan){" "}
            <span className="gum">*</span>
          </p>
        </Information>
        <Range />
        <Information marginTop="30px">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <p
              style={{
                maxWidth: "120px",
              }}
            >
              <strong>Sangat tidak</strong> siap
            </p>
            <p
              style={{
                maxWidth: "120px",
                textAlign: "right",
              }}
            >
              <strong>Sangat, sangat</strong> siap
            </p>
          </div>
        </Information>
        <Buttons prevLink="/survey/3" nextLink="/app" />
      </>
    </AuthWrapper>
  );
};

export default TingkatKesiapanPage;
