import { Request, Response } from "express"
import { prisma } from "../../prisma"
import { compareSync, hashSync } from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import config from "../config"

export const signup = async (req: Request, res: Response) => {
    const { email, password, name } = req.body

    let user = await prisma.user.findFirst({ where: { email } })
    if (user) {
        throw Error("User already exists!")
    }
    user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashSync(password, 10)
        }
    })
    res.json(user).status(201).end()
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    let user = await prisma.user.findFirst({ where: { email } })

    if (!user) {
        throw Error("User does not exists!")
    }
    if (!compareSync(password, user.password)) {
        throw Error("Incorrect password!")
    }

    const token = jwt.sign({
        userId: user.id
    }, config.JWT_SECRET)

    res.json({ user, token }).status(200)
}