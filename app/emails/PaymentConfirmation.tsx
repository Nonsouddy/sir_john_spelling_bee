import { Body, Container, Head, Heading, Hr, Html, Section, Img, Text } from "@react-email/components";


type uniqueProps = {
    uniqueId: string;
}

export default function PaymentConfirmation({ uniqueId }: uniqueProps) {

    return (
        <Html>
            <Head />
            <Body style={main}>
                <Container style={container}>
                    <Section style={coverSection}>
                        <Section style={imageSection}>
                            <Img
                                style={imageStyle}
                                src={`https://res.cloudinary.com/dpmx02shl/image/upload/v1738560514/logo_lyf9ib.png`}
                                width="50"
                                height="50"
                                alt="Sir John Spelling Bee Logo"
                            />
                        </Section>
                        <Section style={upperSection}>
                            <Heading style={h1}>Payment Confirmation</Heading>
                            <Text style={mainText}>
                                Thank you. Your payment for the Spelling Bee has been successfully processed. Please stay tuned for further updates, which will be communicated via email, your school, or your tutor.
                            </Text>
                            <Hr className="mx-0 my-[8px] border !border-gray-300 border-solid w-full" />
                            <Section style={verificationSection}>
                                <Text style={verifyText}>Your Contestant Unique ID Remains</Text>
                                <Text style={uniqueCode}>{uniqueId}</Text>
                            </Section>
                        </Section>
                        <Hr />
                        <Section style={lowerSection}>
                            <Text style={cautionText}>
                                Sir John Spelling Bee Web Services will never email you and ask you to disclose
                                or verify your uniqueId, credit card, or banking account number.
                            </Text>
                        </Section>
                    </Section>
                    <Text style={footerText}>
                        This message was produced and distributed by Sir John Spelling Bee Web Services,
                        Inc. All rights reserved.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: "#fff",
    color: "#212121",
};

const container = {
    padding: "20px",
    margin: "0 auto",
    backgroundColor: "#eee",
};

const h1 = {
    color: "#333",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
};

const text = {
    color: "#333",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    margin: "24px 0",
};


const imageSection = {
    backgroundColor: "#3a81ef",
    textAlign: "center" as const,
    padding: "20px 0",
};

const imageStyle = {
    display: "block",
    margin: "0 auto",
}

const coverSection = { backgroundColor: "#fff" };

const upperSection = { padding: "25px 35px" };

const lowerSection = { padding: "25px 35px" };

const footerText = {
    ...text,
    fontSize: "12px",
    padding: "0 20px",
};

const verifyText = {
    ...text,
    margin: 0,
    fontWeight: "bold",
};

const uniqueCode = {
    ...text,
    fontWeight: "bold",
    fontSize: "24px",
    margin: "10px 0",
    textAlign: "center" as const,
    color: "#3a81ef",
};

const verificationSection = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const mainText = { ...text, marginBottom: "14px" };

const cautionText = { ...text, margin: "0px" };
