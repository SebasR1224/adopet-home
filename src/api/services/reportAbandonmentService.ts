import { Report } from "@/types/report";
import { ReportResponse } from "../models/reportResponse";
import { FetchService } from "./fetchService";

export class ReportAbandonmentService {
  static async createReport(report: Report): Promise<ReportResponse> {
    return FetchService.fetch<ReportResponse>('/reports-abandonment', {
      method: 'POST',
      body: JSON.stringify(report),
    });
  }
}