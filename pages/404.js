import Seo from "../components/common/Seo";
import { head } from "../shared/routes";

export default function NotFound() {
    return (
        <section>
            <Seo title={head.notFound} />
            <div>NotFound</div>
        </section>
    );
}
