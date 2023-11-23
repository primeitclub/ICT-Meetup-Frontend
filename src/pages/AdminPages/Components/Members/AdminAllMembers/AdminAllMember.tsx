import dataJson from '../Data/allMemberData.json';
import AdminAllList from '../../reusables/AdminAllList';

interface MemberData {
  memberName: string;
  memberEmail: string;
  memberType: string;
  memberDesignation: string;
  memberBatch: number;
}

const tableHeadersForMembers = ['Name', 'Email', 'Type', 'Designation', 'Batch', 'Actions'];

function AdminAllMember() {
  // const allMemberData: MemberData[] = dataJson;

  // return <AdminAllList dataList={allMemberData} title="All Members" addLink="/" tableHeaders={tableHeadersForMembers} />;
}

export default AdminAllMember;