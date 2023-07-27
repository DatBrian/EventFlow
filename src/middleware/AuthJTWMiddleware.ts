import { Response, NextFunction } from "express";
import { Request as CustomRequest } from '../interfaces/AuthRequestInterface'
import { SignJWT, jwtVerify } from "jose";

class AuthJWTMiddleware {
    public async generateToken(req: CustomRequest, res: Response, next: NextFunction): Promise<void> {
        try {
            const encoder = new TextEncoder();
            const jwt = await new SignJWT(req.body)
                .setProtectedHeader({
                    alg: "HS256",
                    typ: "JWT",
                })
                .setIssuedAt()
                .setExpirationTime("1h")
                .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

            req.session.token = jwt;

            next();
        } catch (error: any) {
            console.error("Error al generar el token:", error.message);
            res.status(500).json({ error: "Error al generar el token :(" });
        }
    }

    public async validateToken(req: CustomRequest, res: Response, next: NextFunction): Promise<void> {
        const { authorization } = req.headers;

        if (!authorization) {
            res.status(401).send({
                token: "Ruta o Token inválidos -.-",
            });
        } else {
            try {
                const encoder = new TextEncoder();
                req.data = await jwtVerify(
                    authorization,
                    encoder.encode(process.env.JWT_PRIVATE_KEY)
                );

                next();
            } catch (error: any) {
                console.error("Error al verificar el token:", error.message);
                res.status(401).send({
                    token: "Verificación fallida, ¿Y tu quién eres? >:(",
                });
            }
        }
    }
}

export const authJWTMiddleware = new AuthJWTMiddleware();