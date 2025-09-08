import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest) {
    try {
    const {data} = await req.json();
    const {subject, name, surname, email, message} = data;
    console.log(`Message bien reçu du serveur: Nom: ${name}, Prénom: ${surname}, Mail: ${email}, Message: ${message}`);
    return NextResponse.json({subject, name, surname, email, message})
    } catch (error) {
        return NextResponse.json({message: (error as Error).message})
    }
   
}