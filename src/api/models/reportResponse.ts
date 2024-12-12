export interface ReportResponse {
    id: string;
    title: string;
    description: string;
    images: string[];
    status: string;
    abandonmentStatus: string;
    address: string;
    abandonmentDateTime: string;
    abandonmentDuration: string;
    reportDateTime: string;
    rescueDateTime: string | null;
    responseTime: string | null;
    foundationId: string | null;
    animals: Animal[];
    reporter: Reporter;
}

interface Animal {
    id: string;
    name: string;
    description: string;
    images: string[];
    specie: string;
    age: string;
    gender: string;
    status: string;
}

interface Reporter {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
}
