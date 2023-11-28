import dataJson from '../Data/allMemberData.json';
import AdminAllList from '../../reusables/AdminAllList';
import MemberRow from './components/MemberRow';

interface MemberData {
  memberImg:string,
  memberName: string;
  memberEmail: string;
  memberVolunteer: string;
  memberDesignation: string;
  memberBatch: string;
}

const tableHeadersForMembers = ['Name', 'Email', 'Volunteer', 'Designation', 'Batch', 'Actions'];

function AdminAllMember() {
  const allMemberData: MemberData[] = dataJson;

  return <AdminAllList dataList={allMemberData} title="All Members" addLink="/" tableHeaders={tableHeadersForMembers} RowComponent={MemberRow} />;
}

export default AdminAllMember;