import { Router } from "express";
import * as swaggerUi from "swagger-ui-express";
const router = Router();

const options = {
    swaggerOptions: {
        url: 'https://petstore.swagger.io/v2/swagger.json'
    }
}
router.use("/docs", swaggerUi.serve, swaggerUi.setup(null, options));

export default router;