/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class ProfileService extends __BaseService {
  static readonly GetReportPath = '/v0/qan/GetReport';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return A successful response.
   */
  GetReportResponse(body: { columns?: Array<string>, group_by?: string, labels?: Array<{ key?: string, value?: Array<string> }>, limit?: number, offset?: number, order_by?: string, period_start_from?: string, period_start_to?: string }): __Observable<__StrictHttpResponse<{ limit?: number, offset?: number, rows?: Array<{ dimension?: string, fingerprint?: string, load?: number, metrics?: { [key: string]: { stats?: { avg?: number, cnt?: number, max?: number, min?: number, p99?: number, rate?: number, sum?: number } } }, num_queries?: number, qps?: number, rank?: number, sparkline?: Array<{ m_bytes_sent_sum_per_sec?: number, m_docs_returned_sum_per_sec?: number, m_docs_scanned_sum_per_sec?: number, m_filesort_on_disk_sum_per_sec?: number, m_filesort_sum_per_sec?: number, m_full_join_sum_per_sec?: number, m_full_scan_sum_per_sec?: number, m_innodb_io_r_bytes_sum_per_sec?: number, m_innodb_io_r_ops_sum_per_sec?: number, m_innodb_io_r_wait_sum_per_sec?: number, m_innodb_pages_distinct_sum_per_sec?: number, m_innodb_queue_wait_sum_per_sec?: number, m_innodb_rec_lock_wait_sum_per_sec?: number, m_lock_time_sum_per_sec?: number, m_merge_passes_sum_per_sec?: number, m_no_good_index_used_sum_per_sec?: number, m_no_index_used_sum_per_sec?: number, m_qc_hit_sum_per_sec?: number, m_query_length_sum_per_sec?: number, m_query_time_sum_per_sec?: number, m_response_length_sum_per_sec?: number, m_rows_affected_sum_per_sec?: number, m_rows_examined_sum_per_sec?: number, m_rows_read_sum_per_sec?: number, m_rows_sent_sum_per_sec?: number, m_select_full_range_join_sum_per_sec?: number, m_select_range_check_sum_per_sec?: number, m_select_range_sum_per_sec?: number, m_sort_range_sum_per_sec?: number, m_sort_rows_sum_per_sec?: number, m_sort_scan_sum_per_sec?: number, m_tmp_disk_tables_sum_per_sec?: number, m_tmp_table_on_disk_sum_per_sec?: number, m_tmp_table_sizes_sum_per_sec?: number, m_tmp_table_sum_per_sec?: number, m_tmp_tables_sum_per_sec?: number, num_queries_per_sec?: number, point?: number, time_frame?: number, timestamp?: string }> }>, total_rows?: number }>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/qan/GetReport`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{ limit?: number, offset?: number, rows?: Array<{ dimension?: string, fingerprint?: string, load?: number, metrics?: { [key: string]: { stats?: { avg?: number, cnt?: number, max?: number, min?: number, p99?: number, rate?: number, sum?: number } } }, num_queries?: number, qps?: number, rank?: number, sparkline?: Array<{ m_bytes_sent_sum_per_sec?: number, m_docs_returned_sum_per_sec?: number, m_docs_scanned_sum_per_sec?: number, m_filesort_on_disk_sum_per_sec?: number, m_filesort_sum_per_sec?: number, m_full_join_sum_per_sec?: number, m_full_scan_sum_per_sec?: number, m_innodb_io_r_bytes_sum_per_sec?: number, m_innodb_io_r_ops_sum_per_sec?: number, m_innodb_io_r_wait_sum_per_sec?: number, m_innodb_pages_distinct_sum_per_sec?: number, m_innodb_queue_wait_sum_per_sec?: number, m_innodb_rec_lock_wait_sum_per_sec?: number, m_lock_time_sum_per_sec?: number, m_merge_passes_sum_per_sec?: number, m_no_good_index_used_sum_per_sec?: number, m_no_index_used_sum_per_sec?: number, m_qc_hit_sum_per_sec?: number, m_query_length_sum_per_sec?: number, m_query_time_sum_per_sec?: number, m_response_length_sum_per_sec?: number, m_rows_affected_sum_per_sec?: number, m_rows_examined_sum_per_sec?: number, m_rows_read_sum_per_sec?: number, m_rows_sent_sum_per_sec?: number, m_select_full_range_join_sum_per_sec?: number, m_select_range_check_sum_per_sec?: number, m_select_range_sum_per_sec?: number, m_sort_range_sum_per_sec?: number, m_sort_rows_sum_per_sec?: number, m_sort_scan_sum_per_sec?: number, m_tmp_disk_tables_sum_per_sec?: number, m_tmp_table_on_disk_sum_per_sec?: number, m_tmp_table_sizes_sum_per_sec?: number, m_tmp_table_sum_per_sec?: number, m_tmp_tables_sum_per_sec?: number, num_queries_per_sec?: number, point?: number, time_frame?: number, timestamp?: string }> }>, total_rows?: number }>;
      })
    );
  }
  /**
   * @param body undefined
   * @return A successful response.
   */
  GetReport(body: { columns?: Array<string>, group_by?: string, labels?: Array<{ key?: string, value?: Array<string> }>, limit?: number, offset?: number, order_by?: string, period_start_from?: string, period_start_to?: string }): __Observable<{ limit?: number, offset?: number, rows?: Array<{ dimension?: string, fingerprint?: string, load?: number, metrics?: { [key: string]: { stats?: { avg?: number, cnt?: number, max?: number, min?: number, p99?: number, rate?: number, sum?: number } } }, num_queries?: number, qps?: number, rank?: number, sparkline?: Array<{ m_bytes_sent_sum_per_sec?: number, m_docs_returned_sum_per_sec?: number, m_docs_scanned_sum_per_sec?: number, m_filesort_on_disk_sum_per_sec?: number, m_filesort_sum_per_sec?: number, m_full_join_sum_per_sec?: number, m_full_scan_sum_per_sec?: number, m_innodb_io_r_bytes_sum_per_sec?: number, m_innodb_io_r_ops_sum_per_sec?: number, m_innodb_io_r_wait_sum_per_sec?: number, m_innodb_pages_distinct_sum_per_sec?: number, m_innodb_queue_wait_sum_per_sec?: number, m_innodb_rec_lock_wait_sum_per_sec?: number, m_lock_time_sum_per_sec?: number, m_merge_passes_sum_per_sec?: number, m_no_good_index_used_sum_per_sec?: number, m_no_index_used_sum_per_sec?: number, m_qc_hit_sum_per_sec?: number, m_query_length_sum_per_sec?: number, m_query_time_sum_per_sec?: number, m_response_length_sum_per_sec?: number, m_rows_affected_sum_per_sec?: number, m_rows_examined_sum_per_sec?: number, m_rows_read_sum_per_sec?: number, m_rows_sent_sum_per_sec?: number, m_select_full_range_join_sum_per_sec?: number, m_select_range_check_sum_per_sec?: number, m_select_range_sum_per_sec?: number, m_sort_range_sum_per_sec?: number, m_sort_rows_sum_per_sec?: number, m_sort_scan_sum_per_sec?: number, m_tmp_disk_tables_sum_per_sec?: number, m_tmp_table_on_disk_sum_per_sec?: number, m_tmp_table_sizes_sum_per_sec?: number, m_tmp_table_sum_per_sec?: number, m_tmp_tables_sum_per_sec?: number, num_queries_per_sec?: number, point?: number, time_frame?: number, timestamp?: string }> }>, total_rows?: number }> {
    return this.GetReportResponse(body).pipe(
      __map(_r => _r.body as { limit?: number, offset?: number, rows?: Array<{ dimension?: string, fingerprint?: string, load?: number, metrics?: { [key: string]: { stats?: { avg?: number, cnt?: number, max?: number, min?: number, p99?: number, rate?: number, sum?: number } } }, num_queries?: number, qps?: number, rank?: number, sparkline?: Array<{ m_bytes_sent_sum_per_sec?: number, m_docs_returned_sum_per_sec?: number, m_docs_scanned_sum_per_sec?: number, m_filesort_on_disk_sum_per_sec?: number, m_filesort_sum_per_sec?: number, m_full_join_sum_per_sec?: number, m_full_scan_sum_per_sec?: number, m_innodb_io_r_bytes_sum_per_sec?: number, m_innodb_io_r_ops_sum_per_sec?: number, m_innodb_io_r_wait_sum_per_sec?: number, m_innodb_pages_distinct_sum_per_sec?: number, m_innodb_queue_wait_sum_per_sec?: number, m_innodb_rec_lock_wait_sum_per_sec?: number, m_lock_time_sum_per_sec?: number, m_merge_passes_sum_per_sec?: number, m_no_good_index_used_sum_per_sec?: number, m_no_index_used_sum_per_sec?: number, m_qc_hit_sum_per_sec?: number, m_query_length_sum_per_sec?: number, m_query_time_sum_per_sec?: number, m_response_length_sum_per_sec?: number, m_rows_affected_sum_per_sec?: number, m_rows_examined_sum_per_sec?: number, m_rows_read_sum_per_sec?: number, m_rows_sent_sum_per_sec?: number, m_select_full_range_join_sum_per_sec?: number, m_select_range_check_sum_per_sec?: number, m_select_range_sum_per_sec?: number, m_sort_range_sum_per_sec?: number, m_sort_rows_sum_per_sec?: number, m_sort_scan_sum_per_sec?: number, m_tmp_disk_tables_sum_per_sec?: number, m_tmp_table_on_disk_sum_per_sec?: number, m_tmp_table_sizes_sum_per_sec?: number, m_tmp_table_sum_per_sec?: number, m_tmp_tables_sum_per_sec?: number, num_queries_per_sec?: number, point?: number, time_frame?: number, timestamp?: string }> }>, total_rows?: number })
    );
  }
}

module ProfileService {
}

export { ProfileService }